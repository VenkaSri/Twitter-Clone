package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.TweetDTO;
import ca.venkasritharan.twitterclone.service.TweetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/")
public class TweetController {

  private final TweetService tweetService;

  public TweetController(TweetService tweetService) {
    this.tweetService = tweetService;
  }

  @PostMapping("tweets")
  public ResponseEntity<TweetDTO> postTweet(@RequestBody TweetDTO tweetDTO) {
    return new ResponseEntity<>(tweetService.postTweet(tweetDTO), HttpStatus.CREATED);
  }
}
