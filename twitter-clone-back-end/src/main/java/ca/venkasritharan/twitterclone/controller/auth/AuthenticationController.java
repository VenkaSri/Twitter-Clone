package ca.venkasritharan.twitterclone.controller.auth;

import ca.venkasritharan.twitterclone.dto.*;
import ca.venkasritharan.twitterclone.response.*;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.service.RegistrationService;
//import ca.venkasritharan.twitterclone.util.response.RegistrationResponseBuilder;
import ca.venkasritharan.twitterclone.util.response.CookieUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private final AuthenticationService authenticationService;
  private final RegistrationService registrationService;


  public AuthenticationController(AuthenticationService authenticationService, RegistrationService registrationService) {
    this.authenticationService = authenticationService;
    this.registrationService = registrationService;
  }

  @PostMapping(value = {"/register", "/signup"})
  public ResponseEntity<RegistrationResponse> register(@Valid @RequestBody RegisterDTO registerDTO,
                                                 HttpServletResponse response) throws IOException {
    CookieUtils.clearAuthTokenCookie(response);
    ResponseEntity<RegistrationResponse> registrationResponse = registrationService.register(registerDTO, response);
//    return RegistrationResponseBuilder.build(registrationResponse, response);
    return registrationResponse;
  }

//  @PostMapping(value = {"/login", "/sign-in"})
//  public ResponseEntity<JwtResponse> login(@RequestBody LoginDTO loginDTO) {
//    String token = authenticationService.login(loginDTO);
//
//    JwtResponse jwtResponse = new JwtResponse();
//    jwtResponse.setAccessToken(token);
//
//    return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
//  }

  @PostMapping("/logout")
  public ResponseEntity<Void> logout(HttpServletRequest request, HttpServletResponse response) {
    // Create a cookie that has the same name as your Auth Token
    Cookie cookie = new Cookie("authToken", null);

    // Set the cookie's max age to 0 to delete it
    cookie.setMaxAge(0);
    cookie.setHttpOnly(true);
    cookie.setPath("/"); // Ensure you set the same path as the cookie has

    // Add this cookie to the response
    response.addCookie(cookie);

    // Build the response entity
    return ResponseEntity.ok()
            .header(HttpHeaders.SET_COOKIE, cookie.toString())
            .build();
  }


  @GetMapping("/auth_status")
  public ResponseEntity<AuthStatusResponse> getAuthStatus(HttpServletRequest httpServletRequest) {
    return authenticationService.getAuthStatus(httpServletRequest);
  }

  @GetMapping("/email_available")
  public EmailAvailabilityResponse checkIfEmailIsAvailable(@Valid @RequestParam String email) {
    return authenticationService.checkIfEmailIsAvailable(email);
  }


  @GetMapping("/user_availability")
  public MessageAndCodeResponse doesUserExists(@RequestParam String emailUsernameOrPhone) {
    return  authenticationService.doesUserExists(emailUsernameOrPhone);
  }



}






