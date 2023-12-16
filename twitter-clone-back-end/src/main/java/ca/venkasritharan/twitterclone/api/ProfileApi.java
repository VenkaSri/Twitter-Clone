package ca.venkasritharan.twitterclone.api;

import ca.venkasritharan.twitterclone.application.service.UserProfileService;
import ca.venkasritharan.twitterclone.response.MessageAndCodeResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class ProfileApi {

  private final UserProfileService userProfileService;

  public ProfileApi( UserProfileService userProfileService) {

    this.userProfileService = userProfileService;
  }

  @PostMapping("/profile_picture")
  public ResponseEntity<MessageAndCodeResponse> uploadProfilePicture(@RequestParam("file") MultipartFile file) {
    return userProfileService.uploadPicture(file);

  }
}
