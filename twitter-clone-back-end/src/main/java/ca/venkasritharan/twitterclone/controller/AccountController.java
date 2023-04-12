package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.entity.UserFollows;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api")
public class AccountController {

  AccountService accountService;
  UserRepository userRepository;

  public AccountController(AccountService accountService, UserRepository userRepository) {
    this.accountService = accountService;
    this.userRepository = userRepository;
  }

  @GetMapping("/allAccounts")
  public Response<Map<String, Object>> getAllAccounts(@RequestParam(name = "emailOrPhone") String emailOrPhone) {
    return accountService.getAllAccounts(emailOrPhone);
  }

  @PostMapping("/users/follow")
  public ResponseEntity<String> followUser(@RequestParam String followerEmail, @RequestParam String followedUsername) {
    User follower = userRepository.findByEmail(followerEmail).get();
    User followedUser = userRepository.findByUsername(followedUsername).get();
    if (follower == null || followedUser == null) {
      return ResponseEntity.badRequest().body("Invalid email or username");
    }
    UserFollows userFollows = new UserFollows();
    userFollows.setUser(follower);
    userFollows.setFollowedUser(followedUser);
    userFollows.setDateFollowed(LocalDate.now());
    follower.getFollowing().add(userFollows);
    followedUser.getFollowers().add(userFollows);
    userRepository.save(follower);
    userRepository.save(followedUser);
    return ResponseEntity.ok("User followed successfully");
  }

}
