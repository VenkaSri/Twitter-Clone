package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.dto.ValidateEmailOrPhoneDTO;
import ca.venkasritharan.twitterclone.util.response.Response;

public interface AuthenticationService {
  String login(LoginDTO loginDTO);
  Response<String> register(RegisterDTO registerDTO);
  Response<String> validateEmailOrPhone(ValidateEmailOrPhoneDTO validateEmailOrPhoneDTO);
}
