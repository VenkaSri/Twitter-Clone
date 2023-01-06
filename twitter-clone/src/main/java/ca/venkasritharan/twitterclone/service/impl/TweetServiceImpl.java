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

}
