package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.repository.user.ProfileRepository;
import ca.venkasritharan.twitterclone.response.AuthStatusResponse;
import ca.venkasritharan.twitterclone.response.EmailAvailabilityResponse;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;


@Service
public class AuthenticationServiceImpl implements AuthenticationService {

  private AuthenticationManager authenticationManager;

  private UserRepository userRepository;
  private JwtTokenProvider jwtTokenProvider;
  private final ProfileRepository profileRepository;

  public AuthenticationServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository, JwtTokenProvider jwtTokenProvider, ProfileRepository profileRepository) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
    this.jwtTokenProvider = jwtTokenProvider;
    this.profileRepository = profileRepository;
  }

//  @Override
//  public String login(LoginDTO loginDTO) {
//    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsernameOrEmailOrPhonenumber(),
//                    loginDTO.getPassword()));
//    SecurityContextHolder.getContext().setAuthentication(authentication);
//    String token = jwtTokenProvider.createToken(authentication);
//    return token;
//  }
//
//
//  @Override
//  public void validateEmailOrPhone(String emailOrPhone) {
//    if (userRepository.existsByEmail(emailOrPhone)) {
//      throw new UserAlreadyExistsException("User with the given email or phone already exists.");
//    }
//  }

  @Override
  public ResponseEntity<AuthStatusResponse> getAuthStatus(HttpServletRequest httpServletRequest) {
    try {
      Optional<Cookie> optionalAuthTokenCookie = findAuthTokenCookie(httpServletRequest);
      if (optionalAuthTokenCookie.isPresent()) {
        String token = optionalAuthTokenCookie.get().getValue();
        try {
          boolean isTokenValid = jwtTokenProvider.validateToken(token);
          AuthStatusResponse response = new AuthStatusResponse(isTokenValid);
          return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
          // Log the exception
          // Consider returning a 500 Internal Server Error
          return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        // Handle missing token
        AuthStatusResponse response = new AuthStatusResponse(false);
        return new ResponseEntity<>(response, HttpStatus.OK);
      }
    } catch (Exception e) {
      // Log the exception
      // Consider returning a 500 Internal Server Error
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
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

  @Override
  public EmailAvailabilityResponse checkIfEmailIsAvailable(String email) {
    boolean isEmailAvailable = profileRepository.existsByEmail(email);
    String message = "Email is available";
    if (isEmailAvailable) {
      message = "An user with this email already exists.";
    }
    return new EmailAvailabilityResponse(message, !isEmailAvailable);
  }
}
