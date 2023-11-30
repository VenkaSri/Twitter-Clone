package ca.venkasritharan.twitterclone.api;

import ca.venkasritharan.twitterclone.application.service.UserSuggestionService;
import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class UserSuggestionApi {
  private final UserSuggestionService userSuggestionService;

  public UserSuggestionApi(UserSuggestionService userSuggestionService) {
    this.userSuggestionService = userSuggestionService;
  }

  @GetMapping("/suggestions")
  public Response<UsersSuggestionResponse> suggestUsers(
          @RequestParam int page,
          @RequestParam int pageSize) {

    return userSuggestionService.suggestUsers(page, pageSize);
  }
}
