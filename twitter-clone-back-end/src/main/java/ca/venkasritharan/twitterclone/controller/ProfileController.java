package ca.venkasritharan.twitterclone.controller;



import ca.venkasritharan.twitterclone.entity.user.Profile;
import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.repository.user.ProfileRepository;
import ca.venkasritharan.twitterclone.response.MessageAndCodeResponse;
import ca.venkasritharan.twitterclone.service.UsernameService;

import org.apache.commons.io.IOUtils;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.InputStream;
import java.security.Principal;
import java.util.Optional;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/v1/users")
public class ProfileController {
  @Value("${s3.bucket.name}")
  private String s3BucketName;
  private UsernameService usernameService;
  private ProfileRepository profileRepository;
  private UserRepository userRepository;
//  private final UserProfileService userProfileService;
//  private UserService userService;
  @Autowired
  private S3Client s3Client;

  public ProfileController(UsernameService usernameService, ProfileRepository profileRepository, UserRepository userRepository) {
    this.usernameService = usernameService;
    this.profileRepository = profileRepository;
    this.userRepository = userRepository;
  }


//  @GetMapping("/profiles")
//  public List<UserDetailsResponse> getAllProfileInfo() {
//    return userProfileService.getAllProfiles();
//  }
//
//  @GetMapping("/following_count")
//  public ResponseEntity<Long> getFollowingCount(Principal principal) {
//    return userProfileService.getFollowingCount(principal);
//  }

  @PostMapping("/profile_picture")
  public ResponseEntity<MessageAndCodeResponse> uploadProfilePicture(@RequestParam("file") MultipartFile file, Principal principal) {
    System.out.println(file);
    String username = principal.getName();
    String bucketName = s3BucketName;
    String key = "profile-pictures/" + username + "/" + file.getOriginalFilename();

    try {
      InputStream inputStream = file.getInputStream();
      byte[] contentBytes = IOUtils.toByteArray(inputStream);
      // Upload file to S3
      PutObjectRequest putObjectRequest = PutObjectRequest.builder()
              .bucket(bucketName)
              .key(key)
              .build();
      s3Client.putObject(putObjectRequest, RequestBody.fromInputStream(file.getInputStream(), file.getSize()));

      // Get the URL of the uploaded file (you may need to adjust this based on your bucket setup)
      String fileUrl = "https://" + bucketName + ".s3.amazonaws.com/" + key;


      // Update the user record in the database
      Optional<User> optionalUser = userRepository.findByUsername(username);
      if (optionalUser.isPresent()) {
        Profile profile = optionalUser.get().getProfile();
        profile.setProfile_image_url(fileUrl);

        profileRepository.save(profile);

    MessageAndCodeResponse messageAndCodeResponse = new MessageAndCodeResponse();
    messageAndCodeResponse.setMessage("Successfully uploaded");
    messageAndCodeResponse.setStatus(201);
        return ResponseEntity.status(HttpStatus.OK.value()).body(messageAndCodeResponse);
      } else {

        return ResponseEntity.status(HttpStatus.NOT_FOUND.value()).body(new MessageAndCodeResponse("User not found", HttpStatus.NOT_FOUND.value()));
      }

    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND.value()).body(new MessageAndCodeResponse(e.getMessage(), HttpStatus.NOT_FOUND.value()));
    }
  }
  }






