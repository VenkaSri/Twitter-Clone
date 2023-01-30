package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private AuthenticationService authenticationService;

  public AuthenticationController(AuthenticationService authenticationService) {
    this.authenticationService = authenticationService;
  }

  @PostMapping(value = {"/login", "/sign-in"})
  public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
    String response = authenticationService.login(loginDTO);
    return new ResponseEntity<>(response, HttpStatus.OK);
  }

}
