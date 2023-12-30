package ca.venkasritharan.twitterclone.api;


import ca.venkasritharan.twitterclone.application.service.UserService;
import ca.venkasritharan.twitterclone.core.entity.Post;
import ca.venkasritharan.twitterclone.response.PostResponse;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

  @GetMapping("/username")
  public ResponseEntity<?> getUserByUsername(@RequestParam String username) {
    return userService.getUserDetailsByUsername(username);
  }
  @GetMapping("/posts/likes")
  public ResponseEntity<?> getAllLikedPosts() {
    return userService.getAllLikedPosts();
  };

  @GetMapping
  public UserDetailsResponse getUserDetails() {
    return userService.getUserDetails();
  }

  @GetMapping("/{userId}/posts")
  public List<PostResponse> getUserPosts(@PathVariable Long userId) {
    return userService.getAllPostsByUserId(userId);
  }



}
