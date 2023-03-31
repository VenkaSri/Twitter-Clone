package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.util.response.Response;

public interface UsernameService {

  void assignUsername(String email);
  Response<String> getUsername(String email);
}
