package ca.venkasritharan.twitterclone.controller;


import ca.venkasritharan.twitterclone.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/v1/api/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping("/{userId}/follow")
  public void follow(@PathVariable long userId) {
    userService.followUser(userId);
  }

  @PostMapping("/{userId}/unfollow")
  public void unfollow(@PathVariable long userId) {
    userService.unfollowUser(userId);
  }



}
