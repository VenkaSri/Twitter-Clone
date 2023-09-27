package ca.venkasritharan.twitterclone.service.user;

import ca.venkasritharan.twitterclone.entity.user.Follower;
import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.user.UserService;
import ca.venkasritharan.twitterclone.response.Response;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;

  public UserServiceImpl(UserRepository userRepository, FollowerRepository followerRepository) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
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








}
