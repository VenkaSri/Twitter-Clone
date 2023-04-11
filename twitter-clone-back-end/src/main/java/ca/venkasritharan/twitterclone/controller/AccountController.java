package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.web.bind.annotation.*;

import java.util.List;
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
}
