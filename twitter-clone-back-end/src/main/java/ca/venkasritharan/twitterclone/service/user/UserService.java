package ca.venkasritharan.twitterclone.service.user;

import ca.venkasritharan.twitterclone.response.Response;

public interface UserService {

  Response<String> getFollowingCount(String usernameOrEmail);
  void followUser(long userId);
  void unfollowUser(long userId);

}
