package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;

public interface AuthenticationService {
  String login(LoginDTO loginDTO);
  String register(RegisterDTO registerDTO);
}
