package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {

  private AuthenticationManager authenticationManager;

  public AuthenticationServiceImpl(AuthenticationManager authenticationManager) {
    this.authenticationManager = authenticationManager;
  }

  @Override
  public String login(LoginDTO loginDTO) {
    Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginDTO.getUsernameOrEmailOrPhonenumber(),
                    loginDTO.getPassword()));
    SecurityContextHolder.getContext().setAuthentication(authentication);
    return "Successfully logged in!";
  }
}
