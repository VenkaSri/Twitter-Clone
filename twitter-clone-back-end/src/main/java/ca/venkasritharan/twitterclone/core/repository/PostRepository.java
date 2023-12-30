package ca.venkasritharan.twitterclone.core.repository;

import ca.venkasritharan.twitterclone.core.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface PostRepository extends JpaRepository<Post, Long> {

  Optional<Post> findByPostId(Long postId);
  Optional<Post> findPostByPostId(Long postId);
  List<Post> findAllByUserId(Long userId);
  Long countByUserId(Long userId);

}
