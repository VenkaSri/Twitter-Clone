package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.api.exception.ResourceNotFoundException;
import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.core.entity.Follower;
import ca.venkasritharan.twitterclone.core.entity.Post;
import ca.venkasritharan.twitterclone.core.entity.PostLike;
import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.core.repository.PostLikesRepository;
import ca.venkasritharan.twitterclone.core.repository.PostRepository;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class UserInteractionService {
  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;
  private final PostRepository postRepository;
  private final PostLikesRepository postLikesRepository;

  public UserInteractionService(UserRepository userRepository, FollowerRepository followerRepository, PostRepository postRepository, PostLikesRepository postLikesRepository) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
    this.postRepository = postRepository;
    this.postLikesRepository = postLikesRepository;
  }

  public void followUser(long userId) {
    User followerUser = getAuthenticatedUser();
    User followedUser = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found"));

    if (followerUser.getId() != followedUser.getId()) {
      Follower follower = new Follower();
      follower.setFollower(followerUser);
      follower.setFollowed(followedUser);
      followerRepository.save(follower);
    }
  }

  public void unfollowUser(long userId) {
    User followerUser = getAuthenticatedUser();
    User followedUser = userRepository.findById(userId)
            .orElseThrow(() -> new UserNotFoundException("User not found"));

    followerRepository.findByFollowerAndFollowed(followerUser, followedUser)
            .ifPresent(followerRepository::delete);
  }

  private User getAuthenticatedUser() {
    String username = SecurityContextHolder.getContext().getAuthentication().getName();
    return userRepository.findByUsername(username)
            .orElseThrow(() -> new UserNotFoundException("Authenticated user not found"));
  }


  @Transactional
  public ResponseEntity<?> likePost(long postId) {
    User user = getAuthenticatedUser();
    Post post = postRepository.findPostByPostId(postId)
            .orElseThrow(() -> new ResourceNotFoundException(postId));

    boolean alreadyLiked = postLikesRepository.existsByUserAndPost(user, post);
    if (alreadyLiked) {
      throw new IllegalStateException("User has already liked this post");
    }

    PostLike postLike = new PostLike();
    postLike.setUser(user);
    postLike.setPost(post);
    postLikesRepository.save(postLike);

    return ResponseEntity.ok("Successfully liked the post.");
  }

  @Transactional
  public ResponseEntity<?> unlikePost(long postId) {
    User user = getAuthenticatedUser();

    Post post = postRepository.findPostByPostId(postId)
            .orElseThrow(() -> new ResourceNotFoundException(postId));

    Optional<PostLike> postLikeOpt = postLikesRepository.findByUserAndPost(user, post);
    postLikeOpt.ifPresentOrElse(
            postLikesRepository::delete,
            () -> { throw new IllegalStateException("Like not found for the specified post and user."); }
    );

    return ResponseEntity.ok("Successfully unliked the post.");
  }
}
