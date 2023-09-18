package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.*;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.AuthStatusResponse;
import ca.venkasritharan.twitterclone.response.EmailAvailabilityResponse;
import ca.venkasritharan.twitterclone.response.JwtResponse;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private AuthenticationService authenticationService;
  private UserRepository userRepository;


  public AuthenticationController(AuthenticationService authenticationService, UserRepository userRepository) {
    this.authenticationService = authenticationService;
    this.userRepository = userRepository;
  }

  @PostMapping(value = {"/login", "/sign-in"})
  public ResponseEntity<JwtResponse> login(@RequestBody LoginDTO loginDTO) {
    String token = authenticationService.login(loginDTO);

    JwtResponse jwtResponse = new JwtResponse();
    jwtResponse.setAccessToken(token);

    return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
  }

  @GetMapping("/auth_status")
  public ResponseEntity<AuthStatusResponse> getAuthStatus(HttpServletRequest httpServletRequest) {
    return authenticationService.getAuthStatus(httpServletRequest);
  }

  @GetMapping("/email_available")
  public EmailAvailabilityResponse checkIfEmailIsAvailable(@RequestParam String email) {
    return authenticationService.checkIfEmailIsAvailable(email);
  }

}






