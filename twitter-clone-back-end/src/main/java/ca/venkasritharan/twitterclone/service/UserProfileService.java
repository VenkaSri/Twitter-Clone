package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserProfileService {
  List<UserDetailsResponse> getAllProfiles();
}
