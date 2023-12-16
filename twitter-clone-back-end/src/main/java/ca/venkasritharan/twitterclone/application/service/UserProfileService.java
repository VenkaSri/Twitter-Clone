package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.core.entity.Profile;
import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.core.repository.user.ProfileRepository;
import ca.venkasritharan.twitterclone.response.MessageAndCodeResponse;
import ca.venkasritharan.twitterclone.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.util.Optional;

@Service
public class UserProfileService {
  @Value("${s3.bucket.name}")
  private  String s3BucketName;
  private final S3Client s3Client;
  private final UserRepository userRepository;
  private final ProfileRepository profileRepository;
  public UserProfileService(UserRepository userRepository, S3Client s3Client, ProfileRepository profileRepository) {
    this.userRepository = userRepository;
    this.s3Client = s3Client;
    this.profileRepository = profileRepository;
  }



  public ResponseEntity<MessageAndCodeResponse> uploadPicture(MultipartFile file) {
    String username = SecurityUtils.getUsernameFromAuthentication();
    ;
    String key = generateS3ObjectKey(username, file.getOriginalFilename());

    try {
      uploadToS3(file, key);
      return updateUserProfileAndRespond(username, key);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new MessageAndCodeResponse(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR.value()));
    }
  }

  private String generateS3ObjectKey(String username, String originalFilename) {
    return "profile-pictures/" + username + "/" + originalFilename;
  }

  private void uploadToS3(MultipartFile file, String key) throws IOException {
    PutObjectRequest putObjectRequest = PutObjectRequest.builder()
            .bucket(s3BucketName)
            .key(key)
            .build();
    s3Client.putObject(putObjectRequest, RequestBody.fromInputStream(file.getInputStream(), file.getSize()));
  }

  private ResponseEntity<MessageAndCodeResponse> updateUserProfileAndRespond(String username, String key) {
    String fileUrl = "https://" + s3BucketName + ".s3.amazonaws.com/" + key;
    Optional<User> optionalUser = userRepository.findByUsername(username);

    if (optionalUser.isPresent()) {
      Profile profile = optionalUser.get().getProfile();
      profile.setProfile_image_url(fileUrl);
      profileRepository.save(profile);

      return ResponseEntity.ok(new MessageAndCodeResponse("Successfully uploaded", HttpStatus.OK.value()));
    } else {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new MessageAndCodeResponse("User not found", HttpStatus.NOT_FOUND.value()));
    }
  }





}
