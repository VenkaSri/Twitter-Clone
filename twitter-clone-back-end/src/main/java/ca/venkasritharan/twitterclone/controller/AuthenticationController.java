package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.dto.ValidateEmailOrPhoneDTO;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.util.response.Response;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
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

  @PostMapping(value = {"/register", "/signup"})
  public Response<String> register(@RequestBody RegisterDTO registerDTO) {
   return authenticationService.register(registerDTO);

  }

//  @PostMapping(value = {"/sign-up"})
//  public ResponseEntity<String> register(@RequestBody RegisterDTO registerDTO) {
//    String response = authenticationService.register(registerDTO);
//    return new ResponseEntity<>(response, HttpStatus.CREATED);
//  }

  @PostMapping("/emailOrPhone")
  public Response<String> validateEmailOrPhone(@RequestBody ValidateEmailOrPhoneDTO validateEmailOrPhoneDTO) {

    return authenticationService.validateEmailOrPhone(validateEmailOrPhoneDTO);
  }

}
