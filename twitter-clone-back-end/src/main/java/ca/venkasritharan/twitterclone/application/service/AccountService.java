package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.response.StandardResponse;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsernameAvailabilityResponse;
import ca.venkasritharan.twitterclone.api.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.util.response.CookieUtils;
import jakarta.servlet.http.HttpServletResponse;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class AccountService {
  private final ModelMapper mapper;
  private final UserRepository userRepository;
  private final JwtTokenProvider jwtTokenProvider;

  public AccountService(UserRepository userRepository, ModelMapper mapper, JwtTokenProvider jwtTokenProvider) {
    this.mapper = mapper;
    this.userRepository = userRepository;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  public UserDetailsResponse getUserDetails() {
    User user = getAuthenticatedUser();
    return mapToUserDetailsResponse(user);
  }

  private UserDetailsResponse mapToUserDetailsResponse(User user) {
    UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
    userDetailsResponse.setName(user.getProfile().getName());
    userDetailsResponse.setEmail(user.getProfile().getEmail());
    userDetailsResponse.setId(user.getId());
    userDetailsResponse.setUsername(user.getUsername());
    return userDetailsResponse;
  }

  public UsernameAvailabilityResponse checkIfUsernameIsAvailable(String username) {
    boolean isUsernameAvailable = !userRepository.existsByUsername(username);
    String message = isUsernameAvailable ? "Username is available." : "Username is taken.";
    return new UsernameAvailabilityResponse(message, isUsernameAvailable);
  }

  public ResponseEntity<StandardResponse> updateUsername(String username, HttpServletResponse response) throws IOException {
    User user = getAuthenticatedUser();
    user.setUsername(username);
    userRepository.save(user);
    updateAuthenticationToken(user);
    CookieUtils.addAuthTokenCookie(response, generateAuthToken(user));
    return ResponseEntity.ok(new StandardResponse("Successfully updated username", 200));
  }

  private User getAuthenticatedUser() {
    String principleUsername = SecurityContextHolder.getContext().getAuthentication().getName();
    return userRepository.findByUsername(principleUsername)
            .orElseThrow(() -> new UserNotFoundException("User not found"));
  }

  private String generateAuthToken(User user) {
    Authentication authentication = new UsernamePasswordAuthenticationToken(
            user.getUsername(), user.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return jwtTokenProvider.createToken(authentication);
  }

  private void updateAuthenticationToken(User user) {
    Authentication newAuth = new UsernamePasswordAuthenticationToken(
            user.getUsername(), user.getPassword());
    SecurityContextHolder.getContext().setAuthentication(newAuth);
  }

}
