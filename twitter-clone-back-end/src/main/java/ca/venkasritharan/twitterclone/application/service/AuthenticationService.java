package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.application.dto.LoginDTO;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.core.repository.user.ProfileRepository;
import ca.venkasritharan.twitterclone.response.*;
import ca.venkasritharan.twitterclone.api.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.util.SecurityUtils;
import ca.venkasritharan.twitterclone.util.response.CookieUtils;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;


@Service
@Slf4j
public class AuthenticationService {

  private AuthenticationManager authenticationManager;

  private UserRepository userRepository;
  private JwtTokenProvider jwtTokenProvider;
  private final ProfileRepository profileRepository;
  private final ModelMapper mapper;

  public AuthenticationService(AuthenticationManager authenticationManager, UserRepository userRepository, JwtTokenProvider jwtTokenProvider, ProfileRepository profileRepository, ModelMapper mapper) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
    this.jwtTokenProvider = jwtTokenProvider;
    this.profileRepository = profileRepository;
    this.mapper = mapper;
  }

  public LoginResponse login(LoginDTO loginDTO, HttpServletResponse response) {
    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsernameOrEmailOrPhonenumber(),
                    loginDTO.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);

    String token = jwtTokenProvider.createToken(authentication);
    CookieUtils.addAuthTokenCookie(response, token);

    return new LoginResponse("Login success");
  }

  public EmailAvailabilityResponse checkIfEmailIsAvailable(String email) {
    boolean isEmailAvailable = profileRepository.existsByEmail(email);
    String message = "Email is available";
    if (isEmailAvailable) {
      message = "An user with this email already exists.";
    }
    return new EmailAvailabilityResponse(message, !isEmailAvailable);
  }

  public MessageAndCodeResponse doesUserExists(String emailOrUsernameOrPhone) {
    boolean userExists = userRepository.existsByUsername(emailOrUsernameOrPhone);

    if (userExists) {
      return new MessageAndCodeResponse("User exists", 200);
    } else {
      return new MessageAndCodeResponse("User does not exist.", 400);
    }
  }

  // auth status

  public ResponseEntity<AuthStatusResponse> getAuthStatus(HttpServletRequest httpServletRequest) {
    Optional<Cookie> optionalAuthTokenCookie = findAuthTokenCookie(httpServletRequest);
    if (!optionalAuthTokenCookie.isPresent()) {
      return ResponseEntity.ok(new AuthStatusResponse(false, null));
    }

    String token = optionalAuthTokenCookie.get().getValue();
    if (!isTokenValid(token)) {
      return ResponseEntity.ok(new AuthStatusResponse(false, null));
    }

    try {
      String username = SecurityUtils.getUsernameFromAuthentication();
      UserDetailsResponse userDetailsResponse = getUserDetailsResponse(username);
      return ResponseEntity.ok(new AuthStatusResponse(true, userDetailsResponse));
    } catch (Exception e) {
      log.error("Error retrieving authentication status: ", e);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  private boolean isTokenValid(String token) {
    try {
      return jwtTokenProvider.validateToken(token);
    } catch (Exception e) {
      log.error("Token validation error: ", e);
      return false;
    }
  }

  private UserDetailsResponse getUserDetailsResponse(String username) {
    return userRepository.findByUsername(username)
            .map(user -> mapper.map(user, UserDetailsResponse.class))
            .orElseThrow(() -> new UserNotFoundException("User not found"));
  }

  private Optional<Cookie> findAuthTokenCookie(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    if (cookies == null) {
      return Optional.empty();
    }
    return Arrays.stream(cookies)
            .filter(cookie -> "authToken".equals(cookie.getName()))
            .findFirst();
  }


}
