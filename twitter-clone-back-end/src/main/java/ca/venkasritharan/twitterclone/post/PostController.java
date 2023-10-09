package ca.venkasritharan.twitterclone.post;

import ca.venkasritharan.twitterclone.service.PostService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.security.Principal;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/posts")
public class PostController {

  private final PostService postService;

  public PostController(PostService postService) {
    this.postService = postService;
  }

  @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<PostResponse> createPost(@RequestPart(value = "text", required = false) String text,
                                     @RequestPart(name = "photos", required = false) List<MultipartFile> photos,
                                     Principal principal) {
    return postService.createPost(text,photos, principal);
  }

  @GetMapping("/{postId}")
  public ResponseEntity<?> getPostById(@PathVariable Long postId) {
    return postService.getPostById(postId);
  }
}
