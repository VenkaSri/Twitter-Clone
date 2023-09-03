package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
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
  public Response<String>  register(RegisterDTO registerDTO) {
    if (userRepository.existsByEmail(registerDTO.getEmail())) {
      throw new UserAlreadyExistsException("User with the given email or username already exists.");
    }

    User user = mapper.map(registerDTO, User.class);
    Set<ConstraintViolation<User>> violations = validator.validate(user);
    if (!violations.isEmpty()) {
      throw new ConstraintViolationException(violations);
    }
    user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));


    userRepository.save(user);
    return new Response<>(200, "Validation successful");
  }

  @Override
  public Response<String> validateEmailOrPhone(String emailOrPhone) {
    try {
      if (userRepository.existsByEmail(emailOrPhone)) {
        return new Response<>(409, "An account with that phone number already exists");
      }
      return new Response<>(200, "Email is available.");
    } catch (Exception e) {
      return new Response<>(500, "An error occurred while validating email or phone number");
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

//  private User mapNewUserEntity(RegisterDTO registerDTO) {
//    User user = new User();
//    user.setEmail(registerDTO.getEmail());
//    user.setName(registerDTO.getName());
//    user.setPhoneNumber(registerDTO.getPhoneNumber());
//    String rawPassword = registerDTO.getPassword();
//    Set<ConstraintViolation<User>> violations = validator.validateValue(User.class, "password", rawPassword);
//    System.out.println("Violations: " + violations);
//    if (!violations.isEmpty()) {
//      throw new ConstraintViolationException(violations);
//    }
//    user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
//    return userRepository.save(user);
//  }

//  private User mapNewUserEntity(RegisterDTO registerDTO) {
//    User user = mapper.map(registerDTO, User.class);
//    Set<ConstraintViolation<User>> violations = validator.validate(user);
//    System.out.println("Violations: " + violations);
//    if (!violations.isEmpty()) {
//      throw new ConstraintViolationException(violations);
//    }
//    user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
//    return userRepository.save(user);
//  }



  



  private void mapNewUserRoleEntity(User user) {
    Set<Role> roles = new HashSet<>();
    Role userRole = new Role();
    userRole.setName("ROLE_USER");
    roles.add(userRole);
    user.setRoles(roles);
  }
}
