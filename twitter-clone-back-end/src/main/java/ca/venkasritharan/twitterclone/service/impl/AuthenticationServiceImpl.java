package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

  private AuthenticationManager authenticationManager;
  private UserRepository userRepository;
  private ModelMapper mapper;

  public AuthenticationServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
  }

  @Override
  public String login(LoginDTO loginDTO) {
    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsernameOrEmailOrPhonenumber(),
                    loginDTO.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return "Successfully logged in!";
  }

  @Override
  public String register(RegisterDTO registerDTO) {
    checkIfAccountExistsWith(registerDTO.getPhoneNumber(), registerDTO.getEmail());
    User user =  new User();



    return null;
  }

  private void checkIfAccountExistsWith(String phoneNumber, String email) {
    if (userRepository.existsByPhoneNumber(phoneNumber)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "An account with associated with this number already exists.");
    }
    if (userRepository.existsByEmail(email)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "An account with associated with this number already exists.");
    }
  }

  private void mapNewUserEntity(RegisterDTO registerDTO) {
    User user = mapper.map(registerDTO, User.class);
    userRepository.save(user);
  }
}
