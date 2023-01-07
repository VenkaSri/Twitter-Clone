package ca.venkasritharan.twitterclone.repository;

import ca.venkasritharan.twitterclone.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetsRepository extends JpaRepository<Tweet, Long> {
}
