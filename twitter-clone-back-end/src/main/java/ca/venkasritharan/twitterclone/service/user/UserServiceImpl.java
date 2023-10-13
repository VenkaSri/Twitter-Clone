package ca.venkasritharan.twitterclone.service.user;

import ca.venkasritharan.twitterclone.entity.user.Follower;
import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.post.Post;
import ca.venkasritharan.twitterclone.post.PostResponse;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.Response;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;
  private final ModelMapper mapper;

  public UserServiceImpl(UserRepository userRepository, FollowerRepository followerRepository, ModelMapper mapper) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
    this.mapper = mapper;
  }

  @Override
  public Response<String> getFollowingCount(String usernameOrEmail) {
    return null;
  }

  @Override
  public void followUser(long userId) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    Optional<User> followerUser = userRepository.findByUsername(authentication.getName());
    Optional<User> followedUser = userRepository.findById(userId);

    Follower follower = new Follower();

    if (followerUser.isPresent() && followedUser.isPresent() && followerUser.get().getId() != followedUser.get().getId()) {
      follower.setFollower(followerUser.get());
      follower.setFollowed(followedUser.get());
      followerRepository.save(follower);
    }
  }

  @Override
  public void unfollowUser(long userId) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    Optional<User> followerUser = userRepository.findByUsername(authentication.getName());
    Optional<User> followedUser = userRepository.findById(userId);

    if (followerUser.isPresent() && followedUser.isPresent() && followerUser.get().getId() != followedUser.get().getId()) {
      Optional<Follower> existingRelationship = followerRepository.findByFollowerAndFollowed(followerUser.get(), followedUser.get());
      if (existingRelationship.isPresent()) {
        followerRepository.delete(existingRelationship.get());
      }
    }
  }

  @Override
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
    userDetailsResponse.setUsername(user.getUsername());
    userDetailsResponse.setId(user.getId());
    userDetailsResponse.setName(user.getProfile().getName());
    userDetailsResponse.setProfile_image_url(user.getProfile().getProfile_image_url());
    userDetailsResponse.setBio(user.getProfile().getBio());
    userDetailsResponse.setFollowerCount(user.getProfile().getProfileCount().getFollowerCount());
    userDetailsResponse.setFollowingCount(user.getProfile().getProfileCount().getFollowingCount());
    return userDetailsResponse;
  }

}
