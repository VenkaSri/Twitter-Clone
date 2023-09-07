package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.LoginDTO;

public interface AuthenticationService {
  String login(LoginDTO loginDTO);
  void validateEmailOrPhone(String emailOrPhone);
}
