package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.exception.UserAlreadyExistsException;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.stereotype.Service;


@Service
public class AuthenticationServiceImpl implements AuthenticationService {

  private AuthenticationManager authenticationManager;

  private UserRepository userRepository;
  private JwtTokenProvider jwtTokenProvider;

  public AuthenticationServiceImpl(AuthenticationManager authenticationManager, UserRepository userRepository, JwtTokenProvider jwtTokenProvider) {
    this.authenticationManager = authenticationManager;
    this.userRepository = userRepository;
    this.jwtTokenProvider = jwtTokenProvider;
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
  public void validateEmailOrPhone(String emailOrPhone) {
    if (userRepository.existsByEmail(emailOrPhone)) {
      throw new UserAlreadyExistsException("User with the given email or phone already exists.");
    }
  }
}
