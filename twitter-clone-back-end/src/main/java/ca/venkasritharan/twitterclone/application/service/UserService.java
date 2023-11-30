package ca.venkasritharan.twitterclone.application.service;


import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.core.entity.PostLike;
import ca.venkasritharan.twitterclone.core.repository.PostLikesRepository;
import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;
  private final PostLikesRepository postLikesRepository;
  private final ModelMapper mapper;

  public UserService(UserRepository userRepository, FollowerRepository followerRepository, PostLikesRepository postLikesRepository, ModelMapper mapper) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
    this.postLikesRepository = postLikesRepository;
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
    System.out.println(user.getUsername());
    return ResponseEntity.status(200).body(createResponse(user));
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
