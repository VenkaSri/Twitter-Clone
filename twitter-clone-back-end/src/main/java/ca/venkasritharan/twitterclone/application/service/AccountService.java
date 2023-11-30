package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.response.StandardResponse;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsernameAvailabilityResponse;
import ca.venkasritharan.twitterclone.api.security.jwt.JwtTokenProvider;
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
import java.util.Optional;

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

  public UserDetailsResponse getUserDetails(Principal principal) {
    Optional<User> optionalUser = userRepository.findByUsername(principal.getName());
    UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
    if (optionalUser.isPresent()) {
      User user = optionalUser.get();
      userDetailsResponse.setName(user.getProfile().getName());
      userDetailsResponse.setEmail(user.getProfile().getEmail());
      userDetailsResponse.setId(user.getId());
      userDetailsResponse.setUsername(user.getUsername());
      return userDetailsResponse;
    } else {
      throw new UserNotFoundException("User not found");
    }
  }


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

  public ResponseEntity<StandardResponse> updateUsername(String username, HttpServletResponse response) throws IOException {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    String principleUsername = authentication.getName();
    Optional<User> optionalUser = userRepository.findByUsername(principleUsername);

    if (optionalUser.isPresent()) {
      User user = optionalUser.get();
      user.setUsername(username);
      userRepository.save(user);
      String newToken = generateAuthToken(user);
      handleSuccessfulRegistration(response, newToken);
      return ResponseEntity.ok(new StandardResponse("Successfully updated username", 200));
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
