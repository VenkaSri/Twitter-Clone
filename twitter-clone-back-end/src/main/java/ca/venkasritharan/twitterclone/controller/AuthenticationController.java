package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.*;
import ca.venkasritharan.twitterclone.exception.UserAlreadyExistsException;
import ca.venkasritharan.twitterclone.response.AuthStatusResponse;
import ca.venkasritharan.twitterclone.response.JwtResponse;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.service.RegistrationService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.response.Response;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.Collections;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private AuthenticationService authenticationService;
  private RegistrationService registrationService;
  private JwtTokenProvider jwtTokenProvider;

  public AuthenticationController(AuthenticationService authenticationService, RegistrationService registrationService, JwtTokenProvider jwtTokenProvider) {
    this.authenticationService = authenticationService;
    this.registrationService = registrationService;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @PostMapping(value = {"/login", "/sign-in"})
  public ResponseEntity<JwtResponse> login(@RequestBody LoginDTO loginDTO) {
    String token = authenticationService.login(loginDTO);

    JwtResponse jwtResponse = new JwtResponse();
    jwtResponse.setAccessToken(token);

    return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
  }




//  @GetMapping("/check-emailOrPhone")
//  public ResponseEntity<Response<String>> validateEmailOrPhone(@RequestParam("emailOrPhone") String emailOrPhone) {
//    try {
//      authenticationService.validateEmailOrPhone(emailOrPhone);
//      return ResponseEntity.ok(new Response<>(200, "Email or phone is available."));
//    } catch (UserAlreadyExistsException e) {
//      return ResponseEntity.ok(new Response<>(409, "User with the given email or phone already exists."));
//    }
//  }

//  @GetMapping("/status")
//  public ResponseEntity<Map<String, Boolean>> getAuthStatus(HttpServletRequest request) {
//    try {
//      Optional<Cookie> optionalAuthTokenCookie = findAuthTokenCookie(request);
//      if (optionalAuthTokenCookie.isPresent()) {
//        String token = optionalAuthTokenCookie.get().getValue();
//        boolean isTokenValid = jwtTokenProvider.validateToken(token);
//        if (isTokenValid) {
//          return createAuthenticatedResponse();
//        }
//      }
//    } catch (Exception e) {
//      // Log the exception and consider returning a 500 Internal Server Error
//    }
//    return createUnauthenticatedResponse();
//
//  }

  @GetMapping("/status")
  public Response<AuthStatusResponse> getAuthStatus(HttpServletRequest request) {
    try {
      Optional<Cookie> optionalAuthTokenCookie = findAuthTokenCookie(request);
      if (optionalAuthTokenCookie.isPresent()) {
        String token = optionalAuthTokenCookie.get().getValue();
        boolean isTokenValid = jwtTokenProvider.validateToken(token);
        if (isTokenValid) {
          return createAuthenticatedResponse();
        }
      }
    } catch (Exception e) {
      // Log the exception and consider returning a 500 Internal Server Error
    }
    return createUnauthenticatedResponse();

  }




  private Optional<Cookie> findAuthTokenCookie(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    if (cookies == null) {
      return Optional.empty();
    }
    return Arrays.stream(cookies)
            .filter(cookie -> "authToken".equals(cookie.getName()))
            .findFirst();
  }

  private Response<AuthStatusResponse> createAuthenticatedResponse() {
    return new Response<>(200, "Authenticated", new AuthStatusResponse(true), null);
  }

  private Response<AuthStatusResponse> createUnauthenticatedResponse() {
    return new Response<>(401, "Not Authenticated", new AuthStatusResponse(false), null);
  }
}






