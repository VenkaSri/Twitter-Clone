package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.response.RegistrationResponse;
import ca.venkasritharan.twitterclone.response.Response;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;

public interface RegistrationService {

  ResponseEntity<RegistrationResponse> register(RegisterDTO registerDTO, HttpServletResponse response);

}
