package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.TweetDTO;
import ca.venkasritharan.twitterclone.entity.Tweet;

import java.util.List;

public interface TweetService {

  TweetDTO postTweet(TweetDTO clientResponse);
  List<Tweet> getAllTweets();
  TweetDTO getTweetById(long id);
}
