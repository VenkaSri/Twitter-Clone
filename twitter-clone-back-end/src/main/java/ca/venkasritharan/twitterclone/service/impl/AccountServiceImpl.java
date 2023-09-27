package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsernameAvailabilityResponse;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AccountService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;


import java.io.IOException;
import java.security.Principal;
import java.util.*;

@Service
public class AccountServiceImpl implements AccountService {

  private final ModelMapper mapper;
  private final UserRepository userRepository;
  private final JwtTokenProvider jwtTokenProvider;

  public AccountServiceImpl(UserRepository userRepository, ModelMapper mapper, JwtTokenProvider jwtTokenProvider) {
    this.mapper = mapper;
    this.userRepository = userRepository;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @Override
  public UserDetailsResponse getUserDetails(Principal principal) {
    Optional<User> optionalUser = userRepository.findByUsername(principal.getName());
    if (optionalUser.isPresent()) {
      User user = optionalUser.get();
      return mapper.map(user, UserDetailsResponse.class);
    } else {
      throw new UserNotFoundException("User not found");
    }
  }


  @Override
  public UsernameAvailabilityResponse checkIfUsernameIsAvailable(String username) {
    boolean isUsernameAvailable = userRepository.existsByUsername(username);
    String message = "";

    if (isUsernameAvailable) {
      message = "Username is taken.";
    } else {
      message = "Username is available.";
    }
    return new UsernameAvailabilityResponse(message, !isUsernameAvailable);
  }

  @Override
  public ResponseEntity<String> updateUsername(Principal principal, String username, HttpServletResponse response) throws IOException {
    Optional<User> optionalUser = userRepository.findByUsername(principal.getName());


    if (optionalUser.isPresent()) {
      User user = optionalUser.get();
      user.setUsername(username);
      userRepository.save(user);
      String newToken = generateAuthToken(user);
      handleSuccessfulRegistration(response, newToken);
      return ResponseEntity.ok("Success");
    } else {
      throw new UserNotFoundException("User not found");
    }
  }

  private String generateAuthToken(User user) {
    Authentication authentication = new UsernamePasswordAuthenticationToken(
            user.getUsername(), user.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return jwtTokenProvider.createToken(authentication);
  }

  private static void handleSuccessfulRegistration(HttpServletResponse httpResponse, String authToken) throws IOException {
    Cookie cookie = new Cookie("authToken", authToken);
    cookie.setHttpOnly(true);
    cookie.setMaxAge(604800); // 7 days
    cookie.setPath("/");
    httpResponse.addCookie(cookie);
  }
}
