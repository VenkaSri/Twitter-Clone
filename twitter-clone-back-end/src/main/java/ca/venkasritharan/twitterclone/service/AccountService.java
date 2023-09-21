package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsernameAvailabilityResponse;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.security.Principal;
import java.util.Map;

public interface AccountService {
  UserDetailsResponse getUserDetails(Principal principal);

  UsernameAvailabilityResponse checkIfUsernameIsAvailable(String username);

  ResponseEntity<String> updateUsername(Principal principal, String username, HttpServletResponse response) throws IOException;

}
