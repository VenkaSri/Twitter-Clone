package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.response.Response;

import java.util.Map;

public interface AccountService {
  Response<Map<String, Object>> getAllAccounts(String emailOrPhone);

  Response<String> follow(String followerEmailOrPhone, String followedUsername);
  Response<String> unfollow(String followerEmailOrPhone, String followedUsername);

}
