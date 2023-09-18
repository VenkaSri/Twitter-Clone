package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsernameAvailabilityResponse;

import java.security.Principal;
import java.util.Map;

public interface AccountService {
  UserDetailsResponse getUserDetails(Principal principal);

  UsernameAvailabilityResponse checkIfUsernameIsAvailable(String username);



}
