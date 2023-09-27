package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.entity.user.Profile;
import ca.venkasritharan.twitterclone.entity.user.ProfileCount;
import ca.venkasritharan.twitterclone.repository.user.ProfileRepository;
import ca.venkasritharan.twitterclone.response.RegistrationResponse;
import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.exception.UserAlreadyExistsException;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.RegistrationService;
import ca.venkasritharan.twitterclone.response.Response;
import jakarta.validation.*;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

@Service
public class RegistrationServiceImpl implements RegistrationService {
  private final AuthenticationManager authenticationManager;
  private final ProfileRepository profileRepository;
  private final UserRepository userRepository;
  private final ModelMapper mapper;
  private final PasswordEncoder passwordEncoder;
  private final JwtTokenProvider jwtTokenProvider;
  private final Validator validator;


  public RegistrationServiceImpl(AuthenticationManager authenticationManager,
                                 ProfileRepository profileRepository, UserRepository userRepository,
                                 ModelMapper mapper,
                                 PasswordEncoder passwordEncoder,
                                 JwtTokenProvider jwtTokenProvider, Validator validator) {
    this.authenticationManager = authenticationManager;
    this.profileRepository = profileRepository;
    this.userRepository = userRepository;
    this.mapper = mapper;
    this.passwordEncoder = passwordEncoder;
    this.jwtTokenProvider = jwtTokenProvider;
    this.validator = validator;
  }

  @Override
  public Response<RegistrationResponse> register(RegisterDTO registerDTO) {
    try {
      validateRegistration(registerDTO);
      User user = createUser(registerDTO);
      saveUser(user);
      return generateSuccessfulRegistrationResponse(user);
    } catch (UserAlreadyExistsException | ConstraintViolationException e) {
      return createErrorResponse(400, e.getMessage());
    } catch (Exception e) {
      return createErrorResponse(500, e.getMessage());
    }
  }

  private void validateRegistration(RegisterDTO registerDTO) {
    validateEmail(registerDTO.getEmail());
    validateUserConstraints(registerDTO);
  }

  private User createUser(RegisterDTO registerDTO) {
    User user = new User();
    ProfileCount profileCount = new ProfileCount();
    Profile profile = mapper.map(registerDTO, Profile.class);
    profile.setProfileCount(profileCount);
    user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
    user.setUsername(generateUniqueUsername(registerDTO.getName()));
    user.setProfile(profile);
    return user;
  }

//  private User createUser(RegisterDTO registerDTO) {
//    User user = new User();
//    user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
//    user.setUsername(generateUniqueUsername(registerDTO.getName()));
//
//    Profile profile = mapper.map(registerDTO, Profile.class);
//
//    // Set any other profile properties as needed
//
//    user.setProfile(profile);
//    profile.setUser(user);
//
//    return userRepository.save(user);
//  }


  private void saveUser(User user) {
    userRepository.save(user);
  }

  private Response<RegistrationResponse> generateSuccessfulRegistrationResponse(User user) {
    String token = generateAuthToken(user);
    return createResponse(200, "User successfully registered", token);
  }

  private Response<RegistrationResponse> createErrorResponse(int statusCode, String message) {
    return createResponse(statusCode, message, null);
  }

//  private void setUniqueUsername(User user) {
//    String uniqueUsername = generateUniqueUsername(user.getName());
//    user.setUsername(uniqueUsername);
//  }

  private User mapDtoToUser(RegisterDTO registerDTO) {
    User user = mapper.map(registerDTO, User.class);
    Set<ConstraintViolation<User>> violations = validator.validate(user);
    if (!violations.isEmpty()) {
      throw new ConstraintViolationException(violations);
    }
    return user;
  }

  private void validateUserConstraints(RegisterDTO registerDTO) {
    User user = mapper.map(registerDTO, User.class);
    Profile profile = mapper.map(registerDTO, Profile.class);
    Set<ConstraintViolation<User>> userViolations = validator.validate(user);
    Set<ConstraintViolation<Profile>> profileViolations = validator.validate(profile);
    if (!userViolations.isEmpty() || !profileViolations.isEmpty()) {
      Set<ConstraintViolation<?>> allViolations = new HashSet<>();
      allViolations.addAll(userViolations);
      allViolations.addAll(profileViolations);

      throw new ConstraintViolationException(allViolations);
    }
  }

  public void validateEmail(String email) {
    if (profileRepository.existsByEmail(email)) {
      throw new UserAlreadyExistsException("User with the given email already exists.");
    }
  }

  private  String generateUniqueUsername(String name) {
    int attempt = 0;
    while (true) {
      String candidateUsername = generateCandidateUsername(name, attempt);

      if (isUniqueUsername(candidateUsername)) {
        return candidateUsername;
      }
      attempt++;
    }
  }

  private String generateCandidateUsername(String name, int attempt) {
    String shortenedName = name.replaceAll("\\s+", "").substring(0, Math.min(name.length(), 12 - attempt));
    System.out.println(shortenedName);
    if (shortenedName.length() < 5) {
      String randomDigits = generateRandomDigits(15 - shortenedName.length());
      return shortenedName + randomDigits;
    } else {
      return shortenedName;
    }
  }

  private boolean isUniqueUsername(String username) {
    Set<String> existingUsernames = userRepository.findAllUsernames();
    return !existingUsernames.contains(username) && username.length() <= 15;
  }

  private String generateRandomDigits(int length) {
    Random random = new Random();
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < length; i++) {
      sb.append(random.nextInt(10));
    }
    return sb.toString();
  }

  private Response<RegistrationResponse> createResponse(int statusCode, String message, String token) {
    RegistrationResponse registrationResponse = new RegistrationResponse();
    registrationResponse.setMessage(message);
    registrationResponse.setToken(token);
    return new Response<>(statusCode, registrationResponse.getMessage(), registrationResponse, null);
  }

  private String generateAuthToken(User user) {
    Authentication authentication = new UsernamePasswordAuthenticationToken(
            user.getUsername(), user.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return jwtTokenProvider.createToken(authentication);
  }

}
