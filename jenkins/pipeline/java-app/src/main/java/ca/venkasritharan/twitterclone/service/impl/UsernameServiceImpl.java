package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UsernameServiceImpl implements UsernameService {

  private UserRepository userRepository;


  @Override
  public ResponseEntity<Response<String>> checkIfUsernameIsAvailable(String username) {
    return null;


  }
}
