package ca.venkasritharan.twitterclone.core.repository;

import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.entity.Post;
import ca.venkasritharan.twitterclone.core.entity.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostLikesRepository extends JpaRepository<PostLike, Long> {
  boolean existsByUserAndPost(User user, Post post);
  Long countByPost(Post post);

  List<PostLike> findByUser_Id(Long userId);
  PostLike findPostLikeByUser_Id(Long userId);
  Optional<PostLike> findByUserAndPost(User user, Post post);

}

