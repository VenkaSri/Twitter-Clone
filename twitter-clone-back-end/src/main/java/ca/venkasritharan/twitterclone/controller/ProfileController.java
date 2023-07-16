package ca.venkasritharan.twitterclone.controller;


import ca.venkasritharan.twitterclone.service.UserService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/user")
public class ProfileController {

  private UsernameService usernameService;
  private UserService userService;

  public ProfileController(UsernameService usernameService, UserService userService) {
    this.usernameService = usernameService;
    this.userService = userService;
  }

  @GetMapping("/username/{email}")
  public Response<Map<String, Object>> getUsername(@PathVariable(name = "email") String emailOrPhone) {
    return usernameService.getNameAndUsername(emailOrPhone);
  }

  @GetMapping("/{username}")
  public Response<String> checkUsername(@PathVariable String username, @RequestParam(name = "email") String email) {
    return usernameService.checkUsername(username, email);
  }

  @PostMapping("/{username}/{email}")
  public Response<String> updateUsername(@PathVariable(name = "email") String emailOrPhone, @PathVariable String username) {
    return usernameService.updateUsername(username, emailOrPhone);
  }

  @GetMapping("/{usernameOrEmail}/followingCount")
  public Response<String> getFollowingCount(@PathVariable String usernameOrEmail) {
    return userService.getFollowingCount(usernameOrEmail);
  }


}
