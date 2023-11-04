package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.exception.ResourceNotFoundException;
import ca.venkasritharan.twitterclone.post.Post;
import ca.venkasritharan.twitterclone.post.PostRepository;
import ca.venkasritharan.twitterclone.post.PostResponse;
import ca.venkasritharan.twitterclone.post.postinteractions.LikedPostResponse;
import ca.venkasritharan.twitterclone.post.postinteractions.PostLike;
import ca.venkasritharan.twitterclone.post.postinteractions.PostLikesRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import org.apache.commons.io.IOUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.io.InputStream;
import java.io.UncheckedIOException;
import java.security.Principal;
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
  private S3Client s3Client;
  private final ModelMapper mapper;

  public PostService(PostRepository postRepository, UserRepository userRepository, PostLikesRepository postLikesRepository, S3Client s3Client, ModelMapper mapper) {
    this.postRepository = postRepository;
    this.userRepository = userRepository;
    this.postLikesRepository = postLikesRepository;
    this.s3Client = s3Client;
    this.mapper = mapper;
  }

  public ResponseEntity<PostResponse> createPost(String text,
                                                 List<MultipartFile> photos,
                                                 Principal principal) {
    try {
      Optional<User> optionalUser = userRepository.findByUsername(principal.getName());
      if (!optionalUser.isPresent()) {
        PostResponse postResponse = new PostResponse();
        postResponse.setMessage(HttpStatus.BAD_REQUEST.getReasonPhrase());
        postResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        return new ResponseEntity<>(postResponse, HttpStatus.BAD_REQUEST);
      }

      Post newPost = new Post();
      postRepository.save(newPost);
      newPost.setText(text);
      newPost.setCreatedAt(Instant.now().toString());
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
      PostResponse postResponse = new PostResponse();
      postResponse.setMessage("Successfully posted");
      postResponse.setStatus(HttpStatus.OK.value());
      postResponse.setPostId(newPost.getPostId());
      return new ResponseEntity<>(postResponse, HttpStatus.OK);
    } catch (Exception e) {
      PostResponse postResponse = new PostResponse();
      postResponse.setMessage(HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase());
      postResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
      return new ResponseEntity<>(postResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }



  public ResponseEntity<?> getPostById(Long postId) {
    Post post = postRepository.findPostByPostId(postId).orElseThrow(() -> new ResourceNotFoundException(postId));
    return ResponseEntity.status(200).body(createResponse(post));
  }



  private PostResponse createResponse(Post post) {
    PostResponse postResponse = mapper.map(post, PostResponse.class);
    postResponse.setStatus(200);
    postResponse.setMessage("Post retrieved successfully.");
    UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
      User user = post.getUser();
      userDetailsResponse.setName(user.getProfile().getName());
      userDetailsResponse.setEmail(user.getProfile().getEmail());
      userDetailsResponse.setId(user.getId());
      userDetailsResponse.setUsername(user.getUsername());
      postResponse.setUserDetails(userDetailsResponse);
    List<String> photos = Stream.of(
                    post.getPhoto1(),
                    post.getPhoto2(),
                    post.getPhoto3(),
                    post.getPhoto4()
            )
            .filter(Objects::nonNull)
            .collect(Collectors.toList());

    postResponse.setMedia(photos);
    postResponse.setLikes(postLikesRepository.countByPost(post));
    return postResponse;
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

  public List<PostResponse> getAllPosts() {
    List<Post> posts = postRepository.findAll(Sort.by(Sort.Direction.DESC, "createdAt"));
    List<PostResponse> postResponses = new ArrayList<>();
    for (Post post: posts) {
      postResponses.add(createResponse(post));
    }

    return postResponses;
  }


  @Transactional
  public ResponseEntity<?> likePost(long postId) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    Optional<User> user = userRepository.findByUsername(authentication.getName());
    Post post = postRepository.findPostByPostId(postId).orElseThrow(() -> new ResourceNotFoundException(postId));





    if (user.isPresent()) {
      boolean alreadyLiked = postLikesRepository.existsByUserAndPost(user.get(), post);
      if (alreadyLiked) {
        throw new IllegalStateException("User has already liked this post");
      } else {
        PostLike postLike = new PostLike();
        postLike.setUser(user.get());
        postLike.setPost(post);
        postLikesRepository.save(postLike);
      }
    }

    return ResponseEntity.ok("ok");
  }

  @Transactional
  public ResponseEntity<?> unlikePost(long postId) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    Optional<User> user = userRepository.findByUsername(authentication.getName());
    System.out.println(postId);

    if (!user.isPresent()) {
      return ResponseEntity.badRequest().body("User not found.");
    }

    Post post = postRepository.findPostByPostId(postId).orElseThrow(() -> new ResourceNotFoundException(postId));

    // Find the specific PostLike for this user and post
    Optional<PostLike> postLikeOpt = postLikesRepository.findByUserAndPost(user.get(), post);

    if (postLikeOpt.isPresent()) {
      postLikesRepository.delete(postLikeOpt.get());
    } else {
      return ResponseEntity.badRequest().body("Like not found for the specified post and user.");
    }

    return ResponseEntity.ok("Successfully unliked the post.");
  }


  public ResponseEntity<?> getAllLikedPosts () {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    Optional<User> user = userRepository.findByUsername(authentication.getName());
      List<PostLike> postLikes = new ArrayList<>();
    if (user.isPresent()) {
      postLikes = postLikesRepository.findByUser_Id(user.get().getId());
    }

    return ResponseEntity.ok(createP(postLikes));
  }

  public List<Long> createP(List<PostLike> postLikes) {
    List<Long> likedPostResponse = new ArrayList<>();
    for (PostLike post: postLikes) {
      likedPostResponse.add(post.getPost().getPostId());
    }

    return likedPostResponse;
  }



}
