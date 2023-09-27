package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;

public interface UserSuggestionService {
  UsersSuggestionResponse suggestUsers(int page, int pageSize);
}
