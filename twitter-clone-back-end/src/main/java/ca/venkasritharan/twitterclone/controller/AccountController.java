package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.response.Response;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api")
public class AccountController {

//  AccountService accountService;
//
//  public AccountController(AccountService accountService) {
//    this.accountService = accountService;
//  }

  @GetMapping("/hello")
  public String hello() {
    return "Hello";
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
