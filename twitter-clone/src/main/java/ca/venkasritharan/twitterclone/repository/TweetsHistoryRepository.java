package ca.venkasritharan.twitterclone.repository;

import ca.venkasritharan.twitterclone.entity.TweetHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetsHistoryRepository extends JpaRepository<TweetHistory, Long> {
}
