package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.post.Post;
import ca.venkasritharan.twitterclone.post.PostRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import org.apache.commons.io.IOUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.security.Principal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostService {

  @Value("${s3.bucket.name}")
  private String s3BucketName;
  private final PostRepository postRepository;
  private final UserRepository userRepository;
  private S3Client s3Client;
  private final ModelMapper mapper;

  public PostService(PostRepository postRepository, UserRepository userRepository, S3Client s3Client, ModelMapper mapper) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
    this.s3Client = s3Client;
    this.mapper = mapper;
  }

  public ResponseEntity<String> createPost(String text,
                                     List<MultipartFile> photos,
                                     Principal principal) {
    try {
      Optional<User> optionalUser = userRepository.findByUsername(principal.getName());
      if (!optionalUser.isPresent()) {
        return ResponseEntity.badRequest().body("User not found");
      }

      Post newPost = new Post();
      postRepository.save(newPost);

      newPost.setText(text);
      newPost.setCreatedAt(LocalDateTime.now());
      if (photos != null && !photos.isEmpty()) {
        List<String> uploadedUrls = photos.stream()
                .map(photo -> {
                  try {
                    return uploadToS3(photo, optionalUser.get().getUsername());
                  } catch (IOException e) {
                    throw new UncheckedIOException(e); // Convert checked exception to unchecked
                  }
                })
                .collect(Collectors.toList());

        if (uploadedUrls.size() > 0) newPost.setPhoto1(uploadedUrls.get(0));
        if (uploadedUrls.size() > 1) newPost.setPhoto2(uploadedUrls.get(1));
        if (uploadedUrls.size() > 2) newPost.setPhoto3(uploadedUrls.get(2));
        if (uploadedUrls.size() > 3) newPost.setPhoto4(uploadedUrls.get(3));
      }

      User user = optionalUser.get();
      newPost.setUser(user); // Assuming you have a setUser method in Post and a OneToMany relationship with User

      postRepository.save(newPost);
      return ResponseEntity.ok("Success");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
    }
  }



  private Post getPostById(Post post) {
    Optional<Post> retrievedPost = postRepository.findById(post.getPostId());

    return retrievedPost.orElse(null);

  }

  private String uploadToS3(MultipartFile file, String username) throws IOException {


    try {
      String bucketName = s3BucketName;
      String key = "post-photos/" + username + "/" + file.getOriginalFilename();
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
      return fileUrl;
    } catch (Exception e) {
      System.out.println(e);
      throw new RuntimeException("Failed to upload file to S3", e);
    }

  }




//    @PostMapping("/profile-picture")
//public String uploadProfilePicture(@RequestParam("file") MultipartFile file, Principal principal) {
//  String bucketName = "tc-profile-pictures";
//  String key = "profile-pictures/" + file.getOriginalFilename();
//  String username = principal.getName();
//  System.out.println(username);
//
//  try {
//    InputStream inputStream = file.getInputStream();
//    byte[] contentBytes = IOUtils.toByteArray(inputStream);
//    // Upload file to S3
//    PutObjectRequest putObjectRequest = PutObjectRequest.builder()
//            .bucket(bucketName)
//            .key(key)
//            .build();
//    s3Client.putObject(putObjectRequest, RequestBody.fromInputStream(file.getInputStream(), file.getSize()));
//
//    // Get the URL of the uploaded file (you may need to adjust this based on your bucket setup)
//    String fileUrl = "https://" + bucketName + ".s3.amazonaws.com/" + key;
//
//    // Update the user record in the database
//    Optional<User> optionalUser = userRepository.findByUsername(username);
//    if (optionalUser.isPresent()) {
//      User user = optionalUser.get();
//      user.setProfilePictureUrl(fileUrl);
//      userRepository.save(user);
//      return "Successfully uploaded and database updated.";
//    } else {
//      return "User not found";
//    }
//
//  } catch (Exception e) {
//    return "Upload failed: " + e.getMessage();
//  }



}
