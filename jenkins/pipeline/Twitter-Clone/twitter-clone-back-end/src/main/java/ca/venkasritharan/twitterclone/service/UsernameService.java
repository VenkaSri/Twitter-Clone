package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.util.response.Response;

import java.util.Map;

public interface UsernameService {

  void assignUsername(String email);
  Response<Map<String, Object>> getNameAndUsername(String email);
  Response<String> checkUsername(String username, String email);
  Response<String> updateUsername(String username, String email);
}
