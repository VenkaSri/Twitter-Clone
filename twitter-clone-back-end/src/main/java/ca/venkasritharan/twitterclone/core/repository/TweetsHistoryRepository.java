package ca.venkasritharan.twitterclone.core.repository;

import ca.venkasritharan.twitterclone.core.entity.TweetHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TweetsHistoryRepository extends JpaRepository<TweetHistory, Long> {

  void deleteAllByTweetId(long tweetId);
}
