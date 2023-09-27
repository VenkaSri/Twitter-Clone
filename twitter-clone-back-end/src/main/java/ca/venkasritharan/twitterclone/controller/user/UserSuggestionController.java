package ca.venkasritharan.twitterclone.controller.user;


import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
import ca.venkasritharan.twitterclone.service.user.UserSuggestionService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/v1/api/users")
public class UserSuggestionController {

  private final UserSuggestionService userSuggestionService;

  public UserSuggestionController(UserSuggestionService userSuggestionService) {
    this.userSuggestionService = userSuggestionService;
  }

  @GetMapping("/suggestions")
  public UsersSuggestionResponse suggestUsers(int page, int pageSize) {
    return userSuggestionService.suggestUsers(page, pageSize);
  }
}
