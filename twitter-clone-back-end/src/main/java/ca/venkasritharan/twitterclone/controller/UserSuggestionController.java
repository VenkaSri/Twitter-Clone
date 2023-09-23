package ca.venkasritharan.twitterclone.controller;


import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.service.UserSuggestionService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/v1/api/users")
public class UserSuggestionController {

  private final UserSuggestionService userSuggestionService;

  public UserSuggestionController(UserSuggestionService userSuggestionService) {
    this.userSuggestionService = userSuggestionService;
  }

  @GetMapping("/suggestions")
  public List<UserDetailsResponse> getAllUsers() {
    return userSuggestionService.suggestUsers();
  }
}
