package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
  public Response<Map<String, Object>> getAllAccounts() {
    return accountService.getAllAccounts();
  }
}
