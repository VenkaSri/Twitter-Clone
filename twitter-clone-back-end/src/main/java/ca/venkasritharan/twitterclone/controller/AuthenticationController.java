package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.*;
import ca.venkasritharan.twitterclone.exception.UserAlreadyExistsException;
import ca.venkasritharan.twitterclone.response.AuthStatusResponse;
import ca.venkasritharan.twitterclone.response.ErrorResponse;
import ca.venkasritharan.twitterclone.response.JwtResponse;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.service.RegistrationService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.response.Response;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.SignatureException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private AuthenticationService authenticationService;


  public AuthenticationController(AuthenticationService authenticationService) {
    this.authenticationService = authenticationService;
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

}






