package ca.venkasritharan.twitterclone.service.user;

import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import org.springframework.http.ResponseEntity;

public interface UserService {

  Response<String> getFollowingCount(String usernameOrEmail);
  void followUser(long userId);
  void unfollowUser(long userId);

  ResponseEntity<?> getUserById(Long userId);

  UserDetailsResponse getUserDetails();


}
