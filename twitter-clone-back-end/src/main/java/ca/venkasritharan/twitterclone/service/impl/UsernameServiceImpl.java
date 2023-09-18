package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.exception.UsernameUpdateException;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.response.Response;
import jakarta.transaction.Transactional;
import org.springframework.dao.DataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@Service
public class UsernameServiceImpl implements UsernameService {

  private UserRepository userRepository;


  @Override
  public ResponseEntity<Response<String>> checkIfUsernameIsAvailable(String username) {
    return null;


  }
}
