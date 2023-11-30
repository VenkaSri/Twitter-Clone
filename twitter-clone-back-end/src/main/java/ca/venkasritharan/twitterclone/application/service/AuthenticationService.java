package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.core.repository.user.ProfileRepository;
import ca.venkasritharan.twitterclone.response.AuthStatusResponse;
import ca.venkasritharan.twitterclone.response.EmailAvailabilityResponse;
import ca.venkasritharan.twitterclone.response.MessageAndCodeResponse;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.api.security.jwt.JwtTokenProvider;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;


@Service
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

  public ResponseEntity<AuthStatusResponse> getAuthStatus(HttpServletRequest httpServletRequest) {
    try {
      Optional<Cookie> optionalAuthTokenCookie = findAuthTokenCookie(httpServletRequest);
      if (optionalAuthTokenCookie.isPresent()) {
        String token = optionalAuthTokenCookie.get().getValue();
        try {
          boolean isTokenValid = jwtTokenProvider.validateToken(token);
          Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
          String username = authentication.getName();

          Optional<User> optionalUser = userRepository.findByUsername(username);
          UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
          if (optionalUser.isPresent()) {
            userDetailsResponse = mapper.map(optionalUser.get(), UserDetailsResponse.class);

          }


          AuthStatusResponse response = new AuthStatusResponse(isTokenValid, userDetailsResponse);
          return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
          // Log the exception
          // Consider returning a 500 Internal Server Error
          return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      } else {
        // Handle missing token
        AuthStatusResponse response = new AuthStatusResponse(false , null);
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

  public EmailAvailabilityResponse checkIfEmailIsAvailable(String email) {
    boolean isEmailAvailable = profileRepository.existsByEmail(email);
    String message = "Email is available";
    if (isEmailAvailable) {
      message = "An user with this email already exists.";
    }
    return new EmailAvailabilityResponse(message, !isEmailAvailable);
  }


  public MessageAndCodeResponse doesUserExists(String emailOrusernameorPhone) {
    boolean userExists = userRepository.existsByUsername(emailOrusernameorPhone);

    if (userExists) {
      return new MessageAndCodeResponse("User exists", 200);
    } else {
      return new MessageAndCodeResponse("User does not exist.", 400);
    }

  }
}
