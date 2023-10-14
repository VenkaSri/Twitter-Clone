package ca.venkasritharan.twitterclone.controller.user;

import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.service.PostService;
import ca.venkasritharan.twitterclone.service.user.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

  private final UserService userService;
  private final PostService postService;

  public UserController(UserService userService, PostService postService) {
    this.userService = userService;
    this.postService = postService;
  }

  @PostMapping("/{userId}/follow")
  public void follow(@PathVariable long userId) {
    userService.followUser(userId);
  }

  @PostMapping("/{userId}/unfollow")
  public void unfollow(@PathVariable long userId) {
    userService.unfollowUser(userId);
  }

  @GetMapping("/{userId}")
  public ResponseEntity<?> getUserById(@PathVariable Long userId) {
    System.out.println("called");
    return userService.getUserById(userId);
  }
  @GetMapping("/posts/liked")
  public ResponseEntity<?> getAllLikedPosts() {
    return postService.getAllLikedPosts();
  };

  @GetMapping
  public UserDetailsResponse getUserDetails() {
    return userService.getUserDetails();
  }




}
