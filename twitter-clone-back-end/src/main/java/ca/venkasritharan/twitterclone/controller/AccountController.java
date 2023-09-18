package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsernameAvailabilityResponse;
import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Map;
import java.util.Optional;

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

  @GetMapping("/hello")
  public String hello() {
    return "Hello";
  }

  @GetMapping("/user_details")
  public UserDetailsResponse getUserDetails(Principal principal) {
    return accountService.getUserDetails(principal);
  }

  @GetMapping("/username_available")
  public UsernameAvailabilityResponse isUsernameAvailable(@RequestParam String username) {

    return accountService.checkIfUsernameIsAvailable(username);
  }
//
//  @GetMapping("/allAccounts")
//  public Response<Map<String, Object>> getAllAccounts(@RequestParam(name = "emailOrPhone") String emailOrPhone) {
//    return accountService.getAllAccounts(emailOrPhone);
//  }
//
//  @PostMapping("/users/follow")
//  public Response<String> followUser(@RequestParam String followerEmail, @RequestParam String followedUsername) {
//    return accountService.follow(followerEmail, followedUsername);
//  }
//
//  @DeleteMapping("/users/follow")
//  public Response<String> unFollowUser(@RequestParam String followerEmail, @RequestParam String followedUsername) {
//    return accountService.unfollow(followerEmail, followedUsername);
//  }

}
