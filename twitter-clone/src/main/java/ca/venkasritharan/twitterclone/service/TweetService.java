package ca.venkasritharan.twitterclone.service;

import ca.venkasritharan.twitterclone.dto.TweetDTO;

public interface TweetService {

  TweetDTO postTweet(TweetDTO clientResponse);
}
