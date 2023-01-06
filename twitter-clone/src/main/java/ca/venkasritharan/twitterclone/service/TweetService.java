package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.TweetDTO;
import ca.venkasritharan.twitterclone.entity.Tweet;

import java.util.List;

public interface TweetService {

  TweetDTO postTweet(TweetDTO tweetDTO);
  List<Tweet> getAllTweets();
  TweetDTO getTweetById(long id);
  TweetDTO editTweetById(long id, TweetDTO tweetDTO);
  public void deleteById(long id);
}
