package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.TweetDTO;
import ca.venkasritharan.twitterclone.entity.Tweet;
import ca.venkasritharan.twitterclone.entity.TweetHistory;
import ca.venkasritharan.twitterclone.repository.TweetsHistoryRepository;
import ca.venkasritharan.twitterclone.repository.TweetsRepository;
import ca.venkasritharan.twitterclone.service.TweetService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TweetServiceImpl implements TweetService {

  private final TweetsRepository tweetsRepository;
  private final TweetsHistoryRepository tweetsHistoryRepository;

  public TweetServiceImpl(TweetsRepository tweetsRepository, TweetsHistoryRepository tweetsHistoryRepository) {
    this.tweetsRepository = tweetsRepository;
    this.tweetsHistoryRepository = tweetsHistoryRepository;
  }

  @Override
  public TweetDTO postTweet(TweetDTO tweetDTO) {
    Tweet tweet = mapToEntity(tweetDTO);
    Tweet newTweet = tweetsRepository.save(tweet);
    TweetDTO tweetResponse = mapToDTO(newTweet);
    return tweetResponse;
  }

  @Override
  public List<Tweet> getAllTweets() {
    List<Tweet> tweets = tweetsRepository.findAll();
    return tweets;
  }

  @Override
  public TweetDTO getTweetById(long id) {
    Tweet tweet = tweetsRepository.findById(id).orElseThrow();
    return mapToDTO(tweet);
  }

  @Override
  public TweetDTO editTweetById(long id, TweetDTO tweetDTO) {
    Tweet tweet = tweetsRepository.findById(id).orElseThrow();
    saveOldTweet(tweet);
    tweet.setCreatedAt(tweetDTO.getCreatedAt());
    tweet.setText(tweetDTO.getText());
    Tweet editedTweet = tweetsRepository.save(tweet);
    return mapToDTO(editedTweet);
  }

  @Override
  public void deleteById(long id) {
    Tweet tweet = tweetsRepository.findById(id).orElseThrow();
    tweetsRepository.delete(tweet);
  }

  private TweetDTO mapToDTO(Tweet tweet)  {
    TweetDTO tweetDTO = new TweetDTO();
    tweetDTO.setId(tweet.getTweetId());
    tweetDTO.setText(tweet.getText());
    tweetDTO.setCreatedAt(tweet.getCreatedAt());
    return tweetDTO;
  }

  private Tweet mapToEntity(TweetDTO tweetDTO)  {
    Tweet tweet = new Tweet();
    tweet.setText(tweetDTO.getText());
    tweet.setCreatedAt(tweetDTO.getCreatedAt());
    return tweet;
  }

  private TweetHistory mapToTweetHistory(Tweet tweet) {
    TweetHistory tweetHistory = new TweetHistory();
    tweetHistory.setTweetId(tweet.getTweetId());
    tweetHistory.setText(tweet.getText());
    tweetHistory.setCreatedAt(tweet.getCreatedAt());
    return tweetHistory;
  }

  private void saveOldTweet(Tweet oldTweet) {
    TweetHistory tweetHistory = mapToTweetHistory(oldTweet);
    tweetsHistoryRepository.save(tweetHistory);
  }
}
