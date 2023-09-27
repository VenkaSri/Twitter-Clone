package ca.venkasritharan.twitterclone.service.user;

import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;

public interface UserSuggestionService {
  UsersSuggestionResponse suggestUsers(int page, int pageSize);
}
