package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.util.response.Response;

public interface UserService {

  Response<String> getFollowingCount(String usernameOrEmail);
}
