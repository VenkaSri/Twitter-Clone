package ca.venkasritharan.twitterclone.controller;



import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.UserService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;

import org.apache.commons.io.IOUtils;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.InputStream;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/user")
public class ProfileController {

  private UsernameService usernameService;
  private UserRepository userRepository;
  private UserService userService;
  @Autowired
  private S3Client s3Client;

  public ProfileController(UsernameService usernameService, UserService userService, UserRepository userRepository) {
    this.usernameService = usernameService;
    this.userService = userService;
    this.userRepository = userRepository;
  }

  @GetMapping("/username/{email}")
  public Response<Map<String, Object>> getUsername(@PathVariable(name = "email") String emailOrPhone) {
    return usernameService.getNameAndUsername(emailOrPhone);
  }

  @GetMapping("/{username}")
  public Response<String> checkUsername(@PathVariable String username, @RequestParam(name = "email") String email) {
    return usernameService.checkUsername(username, email);
  }

  @PostMapping("/{username}/{email}")
  public Response<String> updateUsername(@PathVariable(name = "email") String emailOrPhone, @PathVariable String username) {
    return usernameService.updateUsername(username, emailOrPhone);
  }

  @GetMapping("/followingCount/{usernameOrEmail}")
  public Response<String> getFollowingCount(@PathVariable String usernameOrEmail) {
    return userService.getFollowingCount(usernameOrEmail);
  }

  @PostMapping("/profile-picture")
  public String uploadProfilePicture(@RequestParam("file") MultipartFile file, @RequestParam("email") String email) {
    String bucketName = "tc-profile-pictures";
    String key = "profile-pictures/" + file.getOriginalFilename();


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
      Optional<User> optionalUser = userRepository.findByEmail(email);
      if (optionalUser.isPresent()) {
        User user = optionalUser.get();
        user.setProfilePictureUrl(fileUrl);
        userRepository.save(user);
        return "Successfully uploaded and database updated.";
      } else {
        return "User not found";
      }

    } catch (Exception e) {
      return "Upload failed: " + e.getMessage();
    }
  }
  }






