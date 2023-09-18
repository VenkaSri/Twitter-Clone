package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.response.Response;
import org.springframework.http.ResponseEntity;

import java.security.Principal;
import java.util.Map;

public interface UsernameService {

  ResponseEntity<Response<String>> checkIfUsernameIsAvailable(String username);
}
