package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.dto.RegistrationResponse;
import ca.venkasritharan.twitterclone.entity.authentication.Role;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.exception.UserAlreadyExistsException;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import jakarta.validation.*;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

  private AuthenticationManager authenticationManager;
  private UserRepository userRepository;
  private ModelMapper mapper;
  private PasswordEncoder passwordEncoder;
  private JwtTokenProvider jwtTokenProvider;
  private UsernameService usernameService;


  ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
  Validator validator = factory.getValidator();


  public AuthenticationServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository, PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider, ModelMapper mapper,  UsernameService usernameService) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.jwtTokenProvider = jwtTokenProvider;
    this.mapper = mapper;
    this.usernameService = usernameService;
  }

  @Override
  public String login(LoginDTO loginDTO) {
    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsernameOrEmailOrPhonenumber(),
                    loginDTO.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    String token = jwtTokenProvider.createToken(authentication);

    return token;
  }

  @Override
  public Response<RegistrationResponse>  register(RegisterDTO registerDTO) {

    try {

      validateEmailOrPhone(registerDTO.getEmail());
      User user = mapper.map(registerDTO, User.class);
      Set<ConstraintViolation<User>> violations = validator.validate(user);
      if (!violations.isEmpty()) {
        throw new ConstraintViolationException(violations);
      }
      user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
      userRepository.save(user);
      usernameService.assignUsername(user);
      String token = generateAuthToken(user);
      RegistrationResponse registrationResponse = new RegistrationResponse();
      registrationResponse.setMessage("Validation successful");
      registrationResponse.setToken(token);
      return createResponse(200, "Validation successful", token);
    } catch (UserAlreadyExistsException e) {
      return createResponse(400, e.getMessage(), null);
    } catch (ConstraintViolationException e) {
      return createResponse(400, "Constraint violation: " + e.getMessage(), null);
    } catch (Exception e) {
      return createResponse(500, "Constraint violation: " + e.getMessage(), null);
    }

  }




  private Response<RegistrationResponse> createResponse(int statusCode, String message, String token) {
    RegistrationResponse registrationResponse = new RegistrationResponse();
    registrationResponse.setMessage(message);
    registrationResponse.setToken(token);
    return new Response<>(statusCode, registrationResponse);
  }

//  @Override
//  public Response<String> validateEmailOrPhone(String emailOrPhone) {
//    if (userRepository.existsByEmail(emailOrPhone)) {
//      return new Response<>(409, "User with the given email or phone already exists.");
//    }
//    return new Response<>(200, "Email or phone is available.");
//  }

  @Override
  public void validateEmailOrPhone(String emailOrPhone) {
    if (userRepository.existsByEmail(emailOrPhone)) {
      throw new UserAlreadyExistsException("User with the given email or phone already exists.");
    }
  }




  private Response<String> checkIfAccountExistsWith(String phoneNumber, String email) {
    try {
      if (userRepository.existsByPhoneNumber(phoneNumber)) {
        return new Response<>(409, "An account with that phone number already exists.");
      }
      if (userRepository.existsByEmail(email)) {
        System.out.println("An account with that email already exists.");
        return new Response<>(409, "An account with that email already exists.");
      }
      return new Response<>(200, "User Successfully Registered");
    } catch (Exception e) {
      return new Response<>(500, "An error occurred while signing up.");
    }
  }

  private String generateAuthToken(User user) {
   Authentication authentication = new UsernamePasswordAuthenticationToken(
            user.getUsername(), user.getPassword()); // You may not need to include the password here
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return jwtTokenProvider.createToken(authentication);
  }


}
