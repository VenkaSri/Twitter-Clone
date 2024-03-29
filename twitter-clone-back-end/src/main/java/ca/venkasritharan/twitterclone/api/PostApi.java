package ca.venkasritharan.twitterclone.api;

import ca.venkasritharan.twitterclone.application.service.UserInteractionService;
import ca.venkasritharan.twitterclone.response.PostResponse;
import ca.venkasritharan.twitterclone.application.service.PostService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/posts")
public class PostApi {
  private final PostService postService;
  private final UserInteractionService userInteractionService;

  public PostApi(PostService postService, UserInteractionService userInteractionService) {
    this.postService = postService;
    this.userInteractionService = userInteractionService;
  }

  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<PostResponse> createPost(@RequestPart(value = "text", required = false) String text,
                                                 @RequestPart(name = "photos", required = false) List<MultipartFile> photos
                                                 ) {
    return postService.createPost(text,photos);
  }

  @GetMapping("/{postId}")
  public ResponseEntity<?> getPostById(@PathVariable Long postId) {
    return postService.getPostById(postId);
  }

  @GetMapping
  public  List<PostResponse> getAllPosts() {
    return postService.getAllPosts();
  }

  @PostMapping("/like/{postId}")
  public ResponseEntity<?> likePost(@PathVariable Long postId) {
    return userInteractionService.likePost(postId);
  }


  @PostMapping("/unlike/{postId}")
  public ResponseEntity<?> unlikePost(@PathVariable Long postId) {
    return userInteractionService.unlikePost(postId);
  }
}
