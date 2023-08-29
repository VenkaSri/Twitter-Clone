package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.dto.ValidateEmailOrPhoneDTO;
import ca.venkasritharan.twitterclone.entity.authentication.Role;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashSet;
import java.util.Set;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

  private AuthenticationManager authenticationManager;
  private UserRepository userRepository;
  private ModelMapper mapper;
  private PasswordEncoder passwordEncoder;


  public AuthenticationServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository, PasswordEncoder passwordEncoder) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  public String login(LoginDTO loginDTO) {
    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsernameOrEmailOrPhonenumber(),
                    loginDTO.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return "Successfully logged in!";
  }

  @Override
  public Response<String>  register(RegisterDTO registerDTO) {
    checkIfAccountExistsWith(registerDTO.getPhoneNumber(), registerDTO.getEmail());
    User user = mapNewUserEntity(registerDTO);
    mapNewUserRoleEntity(user);
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

  private User mapNewUserEntity(RegisterDTO registerDTO) {
    User user = new User();
    user.setEmail(registerDTO.getEmail());
    user.setName(registerDTO.getName());
    user.setPhoneNumber(registerDTO.getPhoneNumber());
    user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
//    user.setUsername(registerDTO.getUsername());
    return userRepository.save(user);
  }

  



  private void mapNewUserRoleEntity(User user) {
    Set<Role> roles = new HashSet<>();
    Role userRole = new Role();
    userRole.setName("ROLE_USER");
    roles.add(userRole);
    user.setRoles(roles);
  }
}
