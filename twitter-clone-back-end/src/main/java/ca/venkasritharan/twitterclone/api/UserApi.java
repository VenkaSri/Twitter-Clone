package ca.venkasritharan.twitterclone.api;


import ca.venkasritharan.twitterclone.application.service.UserService;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class UserApi {

  private final UserService userService;

  public UserApi(UserService userService) {
    this.userService = userService;
  }


  @GetMapping("/{userId}")
  public ResponseEntity<?> getUserById(@PathVariable Long userId) {
    return userService.getUserById(userId);
  }
  @GetMapping("/posts/likes")
  public ResponseEntity<?> getAllLikedPosts() {
    return userService.getAllLikedPosts();
  };

  @GetMapping
  public UserDetailsResponse getUserDetails() {
    return userService.getUserDetails();
  }



}
