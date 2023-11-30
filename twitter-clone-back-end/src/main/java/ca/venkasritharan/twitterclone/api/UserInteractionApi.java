package ca.venkasritharan.twitterclone.api;

import ca.venkasritharan.twitterclone.application.service.UserInteractionService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class UserInteractionApi {

  private final UserInteractionService userInteractionService;

  public UserInteractionApi(UserInteractionService userInteractionService) {
    this.userInteractionService = userInteractionService;
  }

  @PostMapping("/follow/{userId}")
  public void follow(@PathVariable long userId) {
    userInteractionService.followUser(userId);
  }

  @PostMapping("/unfollow/{userId}")
  public void unfollow(@PathVariable long userId) {
    userInteractionService.unfollowUser(userId);
  }
}
