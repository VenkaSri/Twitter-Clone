package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.response.Response;

import java.util.Map;

public interface UsernameService {

  void assignUsername(User user);
  Response<Map<String, Object>> getNameAndUsername(String email);
  Response<String> checkUsername(String username, String email);
  Response<String> updateUsername(String username, String email);
}
