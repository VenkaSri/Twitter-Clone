package ca.venkasritharan.twitterclone.api;

import ca.venkasritharan.twitterclone.application.dto.UpdateUsernameDTO;
import ca.venkasritharan.twitterclone.application.service.AccountService;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.response.StandardResponse;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsernameAvailabilityResponse;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class AccountApi {
  private final AccountService accountService;

  public AccountApi(AccountService accountService) {
    this.accountService = accountService;
  }

  @GetMapping("/hello")
  public String hello() {
    return "Hello";
  }

  // principle user
  @GetMapping("/user_details")
  public UserDetailsResponse getUserDetails() {
    return accountService.getUserDetails();
  }

  @GetMapping("/username_available")
  public UsernameAvailabilityResponse isUsernameAvailable(@RequestParam String username) {
    return accountService.checkIfUsernameIsAvailable(username);
  }

  @PostMapping("/update_username")
  public ResponseEntity<StandardResponse> updateUsername(@Valid @RequestBody UpdateUsernameDTO updateUsernameDTO, HttpServletResponse response) throws IOException {
    String updatedUsername = updateUsernameDTO.getUpdatedUsername();
    return accountService.updateUsername(updatedUsername, response);
  }

}
