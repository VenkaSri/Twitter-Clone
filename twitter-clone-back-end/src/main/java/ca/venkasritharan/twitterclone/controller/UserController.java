package ca.venkasritharan.twitterclone.controller;


import ca.venkasritharan.twitterclone.service.UserService;
import org.springframework.web.bind.annotation.*;


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





}
