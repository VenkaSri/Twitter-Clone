package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.Follower;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.UserService;
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
    if (followerUser.isPresent()) {
      System.out.println(followerUser.get().getId());
    }
    Optional<User> followedUser = userRepository.findById(userId);
    Follower follower = new Follower();
    if (followerUser.isPresent() && followedUser.isPresent() && followerUser.get().getId() != followedUser.get().getId()) {
      follower.setFollower(followerUser.get());
      follower.setFollowed(followedUser.get());
      followerRepository.save(follower);
    }
  }








}
