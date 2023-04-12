package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api")
public class AccountController {

  AccountService accountService;

  public AccountController(AccountService accountService) {
    this.accountService = accountService;
  }

  @GetMapping("/allAccounts")
  public Response<Map<String, Object>> getAllAccounts(@RequestParam(name = "emailOrPhone") String emailOrPhone) {
    return accountService.getAllAccounts(emailOrPhone);
  }

  @PostMapping("/users/follow")
  public Response<String> followUser(@RequestParam String followerEmail, @RequestParam String followedUsername) {
    return accountService.follow(followerEmail, followedUsername);
  }

}
