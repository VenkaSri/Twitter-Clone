package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.core.entity.Follower;
import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserInteractionService {
  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;

  public UserInteractionService(UserRepository userRepository, FollowerRepository followerRepository) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
  }

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

  public void unfollowUser(long userId) {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    Optional<User> followerUser = userRepository.findByUsername(authentication.getName());
    Optional<User> followedUser = userRepository.findById(userId);

    System.out.println(followedUser.get().getUsername());
    System.out.println(followerUser.get().getUsername());

    if (followerUser.isPresent() && followedUser.isPresent()) {
      Optional<Follower> existingRelationship = followerRepository.findByFollowerAndFollowed(followerUser.get(), followedUser.get());
      if (existingRelationship.isPresent()) {
        followerRepository.delete(existingRelationship.get());
      }
    }
  }
}
