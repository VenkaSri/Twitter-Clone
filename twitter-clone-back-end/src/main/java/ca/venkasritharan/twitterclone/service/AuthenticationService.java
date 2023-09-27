package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.response.AuthStatusResponse;
import ca.venkasritharan.twitterclone.response.EmailAvailabilityResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestParam;

public interface AuthenticationService {
//  String login(LoginDTO loginDTO);
//  void validateEmailOrPhone(String emailOrPhone);
  ResponseEntity<AuthStatusResponse> getAuthStatus(HttpServletRequest httpServletRequest);
//  EmailAvailabilityResponse checkIfEmailIsAvailable(String email);

}
