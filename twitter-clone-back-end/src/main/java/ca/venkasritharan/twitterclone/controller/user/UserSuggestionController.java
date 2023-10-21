package ca.venkasritharan.twitterclone.controller.user;


import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
import ca.venkasritharan.twitterclone.service.user.UserSuggestionService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class UserSuggestionController {

  private final UserSuggestionService userSuggestionService;

  public UserSuggestionController(UserSuggestionService userSuggestionService) {
    this.userSuggestionService = userSuggestionService;
  }

  @GetMapping("/suggestions")
  public Response<UsersSuggestionResponse> suggestUsers(
          @RequestParam int page,
          @RequestParam int pageSize) {

    return userSuggestionService.suggestUsers(page, pageSize);
  }
}
