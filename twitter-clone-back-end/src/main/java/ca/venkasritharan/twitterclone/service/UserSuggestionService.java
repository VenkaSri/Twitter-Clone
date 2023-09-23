package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
import org.springframework.data.domain.Page;

import java.util.List;

public interface UserSuggestionService {
  UsersSuggestionResponse suggestUsers(int page, int pageSize);
}
