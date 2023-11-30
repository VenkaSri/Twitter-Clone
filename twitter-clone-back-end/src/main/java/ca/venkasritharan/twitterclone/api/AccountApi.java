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
  private final UserRepository userRepository;

  public AccountApi(AccountService accountService, UserRepository userRepository) {
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

  @PostMapping("/update_username")
  public ResponseEntity<StandardResponse> updateUsername(@Valid @RequestBody UpdateUsernameDTO updateUsernameDTO, HttpServletResponse response) throws IOException {
    String updatedUsername = updateUsernameDTO.getUpdatedUsername();
    return accountService.updateUsername(updatedUsername, response);
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
