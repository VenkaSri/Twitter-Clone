package ca.venkasritharan.twitterclone.core.repository;

import ca.venkasritharan.twitterclone.core.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetsRepository extends JpaRepository<Tweet, Long> {
}
