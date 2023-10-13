package ca.venkasritharan.twitterclone.post.postinteractions;

import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostLikesRepository extends JpaRepository<PostLike, Long> {
  boolean existsByUserAndPost(User user, Post post);
  Long countByPost(Post post);

}

