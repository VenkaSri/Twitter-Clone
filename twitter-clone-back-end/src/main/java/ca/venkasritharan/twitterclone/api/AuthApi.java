package ca.venkasritharan.twitterclone.api;


import ca.venkasritharan.twitterclone.application.dto.LoginDTO;
import ca.venkasritharan.twitterclone.application.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.application.service.AuthenticationService;
import ca.venkasritharan.twitterclone.application.service.RegistrationService;
import ca.venkasritharan.twitterclone.response.*;
import ca.venkasritharan.twitterclone.util.response.CookieUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
public class AuthApi {

  private final AuthenticationService authenticationService;
  private final RegistrationService registrationService;


  public AuthApi(AuthenticationService authenticationService, RegistrationService registrationService) {
    this.authenticationService = authenticationService;
    this.registrationService = registrationService;
  }

  @PostMapping(value = {"/register", "/signup"})
  public ResponseEntity<RegistrationResponse> register(@Valid @RequestBody RegisterDTO registerDTO,
                                                       HttpServletResponse response) throws IOException {
    CookieUtils.clearAuthTokenCookie(response);
    return registrationService.register(registerDTO, response);
  }

  @PostMapping(value = {"/login", "/sign-in"})
  public ResponseEntity<JwtResponse> login(@RequestBody LoginDTO loginDTO) {
    String token = authenticationService.login(loginDTO);

    JwtResponse jwtResponse = new JwtResponse();
    jwtResponse.setAccessToken(token);

    return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
  }

  @PostMapping("/logout")
  public ResponseEntity<Void> logout(HttpServletRequest request, HttpServletResponse response) {
    Cookie cookie = new Cookie("authToken", null);

    cookie.setMaxAge(0);
    cookie.setHttpOnly(true);
    cookie.setPath("/");

    response.addCookie(cookie);
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







