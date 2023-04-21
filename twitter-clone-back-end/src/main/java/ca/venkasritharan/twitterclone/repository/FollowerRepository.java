package ca.venkasritharan.twitterclone.repository;

import ca.venkasritharan.twitterclone.entity.Follower;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FollowerRepository extends JpaRepository<Follower, Long> {
  Optional<Follower> findByFollowerAndFollowed(User follower, User followedUser);
  List<Follower> findAllById(long userId);
  List<Follower> findAllByFollower_Id(long followerId);
}
