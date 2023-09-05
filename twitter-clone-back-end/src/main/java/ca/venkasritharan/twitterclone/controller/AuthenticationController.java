package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.*;
import ca.venkasritharan.twitterclone.exception.UserAlreadyExistsException;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private AuthenticationService authenticationService;
  private UsernameService usernameService;
  private JwtTokenProvider jwtTokenProvider;

  public AuthenticationController(AuthenticationService authenticationService, UsernameService usernameService, JwtTokenProvider jwtTokenProvider) {
    this.authenticationService = authenticationService;
    this.usernameService = usernameService;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @PostMapping(value = {"/login", "/sign-in"})
  public ResponseEntity<JwtResponse> login(@RequestBody LoginDTO loginDTO) {
    String token = authenticationService.login(loginDTO);

    JwtResponse jwtResponse = new JwtResponse();
    jwtResponse.setAccessToken(token);

    return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
  }

  @PostMapping(value = {"/register", "/signup"})
  public ResponseEntity<RegistrationResponse> register(@Valid @RequestBody RegisterDTO registerDTO,
                                                       HttpServletResponse response) throws IOException {
    Response<RegistrationResponse> registrationResponse = authenticationService.register(registerDTO);
    System.out.println(registrationResponse.getStatus());
    if (registrationResponse.getStatus() == 200) {
      String authToken = registrationResponse.getData().getToken();
      addHttpOnlyCookie(response, "authToken", authToken);
    }

    return ResponseEntity.status(registrationResponse.getStatus())
            .body(registrationResponse.getData());
  }


  @GetMapping("/check-emailOrPhone")
  public ResponseEntity<Response<String>> validateEmailOrPhone(@RequestParam("emailOrPhone") String emailOrPhone) {
    try {
      authenticationService.validateEmailOrPhone(emailOrPhone);
      return ResponseEntity.ok(new Response<>(200, "Email or phone is available."));
    } catch (UserAlreadyExistsException e) {
      return ResponseEntity.ok(new Response<>(409, "User with the given email or phone already exists."));
    }
  }

  private void addHttpOnlyCookie(HttpServletResponse response, String name, String value) {
    Cookie cookie = new Cookie(name, value);
    cookie.setHttpOnly(true);
    cookie.setPath("/");
    response.addCookie(cookie);
  }


  @GetMapping("/status")
  public ResponseEntity<Map<String, Boolean>> getAuthStatus(HttpServletRequest request) {
    try {
      // Retrieve the cookies from the request
      Cookie[] cookies = request.getCookies();

      if (cookies != null) {
        // Find the HttpOnly cookie named "authToken"
        Cookie authTokenCookie = Arrays.stream(cookies)
                .filter(cookie -> "authToken".equals(cookie.getName()))
                .findFirst()
                .orElse(null);

        if (authTokenCookie != null) {
          // Get the token value from the cookie
          String token = authTokenCookie.getValue();

          // Token validation logic can be in a separate service
          boolean isAuthenticated = jwtTokenProvider.validateToken(token);

          if (isAuthenticated) {
            return ResponseEntity.ok(Collections.singletonMap("isAuthenticated", true));
          }
        }
      }
    } catch (Exception e) {
      // Log the exception and consider returning a 500 Internal Server Error
    }

    return ResponseEntity.ok(Collections.singletonMap("isAuthenticated", false));

    // Placeholder method for token validation

  }
}






