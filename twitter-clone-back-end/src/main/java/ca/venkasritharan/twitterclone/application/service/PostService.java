package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.api.exception.ResourceNotFoundException;
import ca.venkasritharan.twitterclone.core.entity.Post;
import ca.venkasritharan.twitterclone.core.repository.PostRepository;
import ca.venkasritharan.twitterclone.response.PostResponse;
import ca.venkasritharan.twitterclone.core.repository.PostLikesRepository;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.util.SecurityUtils;
import org.apache.commons.io.IOUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
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
import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class PostService {

  @Value("${s3.bucket.name}")
  private String s3BucketName;
  private final PostRepository postRepository;
  private final UserRepository userRepository;
  private final PostLikesRepository postLikesRepository;
  private final S3Client s3Client;
  private final ModelMapper mapper;

  public PostService(PostRepository postRepository, UserRepository userRepository, PostLikesRepository postLikesRepository, S3Client s3Client, ModelMapper mapper) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
    this.postLikesRepository = postLikesRepository;
    this.s3Client = s3Client;
    this.mapper = mapper;
  }


  // creating post
  public ResponseEntity<PostResponse> createPost(String text,
                                                 List<MultipartFile> photos
                                                 ) {
    try {
      String username = SecurityUtils.getUsernameFromAuthentication();
      User user = getUserByUsername(username).orElseThrow(() -> new UserNotFoundException("User not found"));

      Post newPost = createNewPost(text, user);
      handlePhotoUploads(photos, user, newPost);
      postRepository.save(newPost);

      return buildSuccessResponse(newPost);
    } catch (Exception e) {
      return buildErrorResponse(e);
    }
  }

  private Optional<User> getUserByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  private Post createNewPost(String text, User user) {
    Post newPost = new Post();
    newPost.setText(text);
    newPost.setCreatedAt(Instant.now().toString());
    newPost.setUser(user);
    return newPost;
  }

  private void handlePhotoUploads(List<MultipartFile> photos, User user, Post newPost) throws IOException {
    if (photos != null && !photos.isEmpty()) {
      List<String> uploadedUrls = uploadPhotos(photos, user.getUsername());
      setPhotosToPost(newPost, uploadedUrls);
    }
  }

  private List<String> uploadPhotos(List<MultipartFile> photos, String username) {
    return photos.stream()
            .map(photo -> {
              try {
                return uploadToS3(photo, username);
              } catch (IOException e) {
                throw new UncheckedIOException(e); // Convert checked exception to unchecked
              }
            })
            .collect(Collectors.toList());
  }

  private void setPhotosToPost(Post post, List<String> photoUrls) {
    // im going to set it to the response
  }

  private ResponseEntity<PostResponse> buildSuccessResponse(Post post) {
    PostResponse postResponse = new PostResponse();
    postResponse.setPostId(post.getPostId());
    return new ResponseEntity<>(postResponse, HttpStatus.OK);
  }

  private ResponseEntity<PostResponse> buildErrorResponse(Exception e) {
    PostResponse postResponse = new PostResponse();
    return new ResponseEntity<>(postResponse, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  // retrieving post/posts

  public ResponseEntity<?> getPostById(Long postId) {
    Post post = postRepository.findPostByPostId(postId).orElseThrow(() -> new ResourceNotFoundException(postId));
    return ResponseEntity.status(200).body(createResponse(post));
  }

  public List<PostResponse> getAllPosts() {
    List<Post> posts = postRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
    List<PostResponse> postResponses = new ArrayList<>();
    for (Post post: posts) {
      postResponses.add(createResponse(post));
    }
    return postResponses;
  }

  private PostResponse createResponse(Post post) {
    PostResponse postResponse = mapper.map(post, PostResponse.class);
    setUserDetailsToResponse(post, postResponse);
    setMediaToResponse(post, postResponse);
    setLikesToResponse(post, postResponse);
    return postResponse;
  }

  private void setUserDetailsToResponse(Post post, PostResponse postResponse) {
    UserDetailsResponse userDetails = new UserDetailsResponse();
    User user = post.getUser();
    userDetails.setName(user.getProfile().getName());
    userDetails.setEmail(user.getProfile().getEmail());
    userDetails.setId(user.getId());
    userDetails.setUsername(user.getUsername());
    postResponse.setUserDetails(userDetails);
  }

  private void setMediaToResponse(Post post, PostResponse postResponse) {
    List<String> photos = Stream.of(post.getPhoto1(), post.getPhoto2(), post.getPhoto3(), post.getPhoto4())
            .filter(Objects::nonNull)
            .collect(Collectors.toList());
    postResponse.setMedia(photos);
  }

  private void setLikesToResponse(Post post, PostResponse postResponse) {
    postResponse.setLikes(postLikesRepository.countByPost(post));
  }

  private String uploadToS3(MultipartFile file, String username) throws IOException {
    try {
      String bucketName = s3BucketName;
      String key = "post-photos/" + username + "/" + file.getOriginalFilename();
      InputStream inputStream = file.getInputStream();
      byte[] contentBytes = IOUtils.toByteArray(inputStream);
      PutObjectRequest putObjectRequest = PutObjectRequest.builder()
              .bucket(bucketName)
              .key(key)
              .build();
      s3Client.putObject(putObjectRequest, RequestBody.fromInputStream(file.getInputStream(), file.getSize()));
      return "https://" + bucketName + ".s3.amazonaws.com/" + key;
    } catch (Exception e) {
      throw new RuntimeException("Failed to upload file to S3", e);
    }
  }


}
