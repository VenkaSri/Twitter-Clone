package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.util.response.Response;

import java.util.List;
import java.util.Map;

public interface AccountService {
  Response<Map<String, Object>> getAllAccounts(String emailOrPhone);

  Response<String> follow(String followerEmailOrPhone, String followedUsername);
}
