package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.dto.TweetDTO;
import ca.venkasritharan.twitterclone.entity.Tweet;
import ca.venkasritharan.twitterclone.repository.TweetsRepository;
import ca.venkasritharan.twitterclone.service.TweetService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TweetServiceImpl implements TweetService {

  private final TweetsRepository tweetsRepository;

  public TweetServiceImpl(TweetsRepository tweetsRepository) {
    this.tweetsRepository = tweetsRepository;
  }

  @Override
  public TweetDTO postTweet(TweetDTO clientResponse) {
    Tweet tweet = new Tweet();
    setClientResponseToTweetObject(clientResponse, tweet);
    tweetsRepository.save(tweet);
    setDataFromTableToTweetObject(tweet, clientResponse);
    return clientResponse;
  }

  @Override
  public List<Tweet> getAllTweets() {
    List<Tweet> tweets = tweetsRepository.findAll();
    return tweets;

  }

  public void setClientResponseToTweetObject(TweetDTO tweetDTO, Tweet tweet) {
    tweet.setText(tweetDTO.getText());
    tweet.setCreatedAt(tweetDTO.getCreatedAt());
  }

  public void setDataFromTableToTweetObject(Tweet tweet, TweetDTO tweetDTO) {
    tweetDTO.setId(tweet.getTweetId());
    tweetDTO.setText(tweet.getText());
    tweetDTO.setCreatedAt(tweet.getCreatedAt());
  }

}
