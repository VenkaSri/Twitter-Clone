package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.response.RegistrationResponse;
import ca.venkasritharan.twitterclone.service.RegistrationService;
import ca.venkasritharan.twitterclone.util.response.RegistrationResponseBuilder;
import ca.venkasritharan.twitterclone.response.Response;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class RegistrationController {

  private final RegistrationService registrationService;

  public RegistrationController(RegistrationService registrationService) {
    this.registrationService = registrationService;
  }

  @PostMapping(value = {"/register", "/signup"})
  public ResponseEntity<RegistrationResponse> register(@Valid @RequestBody RegisterDTO registerDTO,
                                                       HttpServletResponse response) throws IOException {
    Response<RegistrationResponse> registrationResponse = registrationService.register(registerDTO);
    return RegistrationResponseBuilder.build(registrationResponse, response);
  }
}
