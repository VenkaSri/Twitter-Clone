package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.RegisterDTO;
import ca.venkasritharan.twitterclone.response.RegistrationResponse;
import ca.venkasritharan.twitterclone.response.Response;

public interface RegistrationService {

  Response<RegistrationResponse> register(RegisterDTO registerDTO);

}
