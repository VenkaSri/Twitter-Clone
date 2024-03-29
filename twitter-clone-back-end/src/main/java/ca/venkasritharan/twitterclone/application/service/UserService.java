package ca.venkasritharan.twitterclone.application.service;


import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.core.entity.Post;
import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.core.repository.PostRepository;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.core.entity.PostLike;
import ca.venkasritharan.twitterclone.core.repository.PostLikesRepository;
import ca.venkasritharan.twitterclone.response.PostResponse;
import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.util.SecurityUtils;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final PostLikesRepository postLikesRepository;
  private final FollowerRepository followerRepository;
  private final PostRepository postRepository;
  private final ModelMapper mapper;

  public UserService(UserRepository userRepository, FollowerRepository followerRepository, PostLikesRepository postLikesRepository, PostRepository postRepository, ModelMapper mapper) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
    this.postLikesRepository = postLikesRepository;
    this.postRepository = postRepository;
    this.mapper = mapper;
  }

  public Response<String> getFollowingCount(String usernameOrEmail) {
    return null;
  }


  public ResponseEntity<?> getUserById(Long userId) {
    Optional<User> optionalUser = userRepository.findById(userId);
    User user = new User();
    if (optionalUser.isPresent()) {
      user = optionalUser.get();
    }
    return ResponseEntity.status(200).body(createResponse(user));
  }

  public ResponseEntity<?> getUserDetailsByUsername(String username) {
    User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UserNotFoundException("With: " + username));

    return ResponseEntity.ok(createResponse(user));
  }

  private UserDetailsResponse createResponse(User user) {
    UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
    List<Long> postIds = new ArrayList<>();
    userDetailsResponse.setUsername(user.getUsername());
    userDetailsResponse.setId(user.getId());
    userDetailsResponse.setName(user.getProfile().getName());
    userDetailsResponse.setProfile_image_url(user.getProfile().getProfile_image_url());
    userDetailsResponse.setBio(user.getProfile().getBio());
    userDetailsResponse.setFollowerCount(user.getProfile().getProfileCount().getFollowerCount());
    userDetailsResponse.setFollowingCount(user.getProfile().getProfileCount().getFollowingCount());
    userDetailsResponse.setPostsCount(postRepository.countByUserId(user.getId()));
    userDetailsResponse.setAccountCreatedAt(user.getAccountCreatedAt());
    for (PostLike post: user.getLikedPosts()) {
      postIds.add(post.getPost().getPostId());
    }
    userDetailsResponse.setLikedPostsIds(postIds);
    return userDetailsResponse;
  }

  public UserDetailsResponse getUserDetails() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    Optional<User> user = userRepository.findByUsername(authentication.getName());
    UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
    if (user.isPresent()) {
      userDetailsResponse = createResponse(user.get());
    }
    return userDetailsResponse;
  }


  private Optional<User> getUserByUsername(String username) {
    return userRepository.findByUsername(username);
  }

  public ResponseEntity<?> getAllLikedPosts() {
    String username = SecurityUtils.getUsernameFromAuthentication();
    User user = getUserByUsername(username).orElseThrow(() -> new UserNotFoundException("User not found"));
    List<PostLike> postLikes = postLikesRepository.findByUser_Id(user.getId());

    return ResponseEntity.ok(extractPostIdsFromLikes(postLikes));
  }

  public List<Long> extractPostIdsFromLikes(List<PostLike> postLikes) {
    return postLikes.stream()
            .map(postLike -> postLike.getPost().getPostId())
            .collect(Collectors.toList());
  }

  public List<PostResponse> getAllPostsByUsername(String username) {
    Optional<User> userOptional = userRepository.findByUsername(username);
    List<PostResponse> postResponseList = new ArrayList<>();
    List<Post> posts = postRepository.findAllByUserId(userOptional.get().getId());
    for (Post post: posts) {
      postResponseList.add(createResponse(post));
    }

    return postResponseList;
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



}
