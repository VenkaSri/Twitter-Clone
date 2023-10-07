package ca.venkasritharan.twitterclone.post;

import ca.venkasritharan.twitterclone.service.PostService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.security.Principal;
import java.util.List;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/v1/api")
public class PostController {

  private final PostService postService;

  public PostController(PostService postService) {
    this.postService = postService;
  }

  @PostMapping(value = "/posts", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<String> createPost(@RequestPart(value = "text", required = false) String text,
                                     @RequestPart(name = "photos", required = false) List<MultipartFile> photos,
                                     Principal principal) {
    return postService.createPost(text,photos, principal);
  }
}
