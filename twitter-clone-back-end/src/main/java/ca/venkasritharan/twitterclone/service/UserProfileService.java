package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import org.springframework.http.ResponseEntity;

import java.security.Principal;
import java.util.List;

public interface UserProfileService {
  List<UserDetailsResponse> getAllProfiles();
  List<UserDetailsResponse> allUnfollowedProfiles(Principal principal);

  ResponseEntity<Long> getFollowingCount(Principal principal);
}
