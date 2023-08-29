package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.dto.ValidateEmailOrPhoneDTO;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private AuthenticationService authenticationService;
  private UsernameService usernameService;

  public AuthenticationController(AuthenticationService authenticationService, UsernameService usernameService) {
    this.authenticationService = authenticationService;
    this.usernameService = usernameService;
  }

  @PostMapping(value = {"/login", "/sign-in"})
  public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
    String response = authenticationService.login(loginDTO);
    return new ResponseEntity<>(response, HttpStatus.OK);
  }

  @PostMapping(value = {"/register", "/signup"})
  public Response<String> register(@RequestBody RegisterDTO registerDTO) {
    Response<String> response = authenticationService.register(registerDTO);
    usernameService.assignUsername(registerDTO.getEmail());
    return response;
  }


  @GetMapping("/check-emailOrPhone")
  public Response<String> validateEmailOrPhone(@RequestParam("emailOrPhone") String emailOrPhone) {
    return authenticationService.validateEmailOrPhone(emailOrPhone);
  }

}
