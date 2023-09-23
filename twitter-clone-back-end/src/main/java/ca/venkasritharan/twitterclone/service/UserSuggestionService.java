package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;

import java.util.List;

public interface UserSuggestionService {
  List<UserDetailsResponse> suggestUsers();
}
