package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.dto.ValidateEmailOrPhoneDTO;

public interface AuthenticationService {
  String login(LoginDTO loginDTO);
  String register(RegisterDTO registerDTO);
  String validateEmailOrPhone(ValidateEmailOrPhoneDTO validateEmailOrPhoneDTO);
}
