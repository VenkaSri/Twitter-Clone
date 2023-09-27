package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.response.Response;
import org.springframework.http.ResponseEntity;

public interface UsernameService {

  ResponseEntity<Response<String>> checkIfUsernameIsAvailable(String username);
}
