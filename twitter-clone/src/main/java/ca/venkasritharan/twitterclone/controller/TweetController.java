package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.TweetDTO;
import ca.venkasritharan.twitterclone.entity.Tweet;
import ca.venkasritharan.twitterclone.service.TweetService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tweets")
public class TweetController {

  private final TweetService tweetService;

  public TweetController(TweetService tweetService) {
    this.tweetService = tweetService;
  }

  @PostMapping()
  public ResponseEntity<TweetDTO> postTweet(@RequestBody TweetDTO tweetDTO) {
    return new ResponseEntity<>(tweetService.postTweet(tweetDTO), HttpStatus.CREATED);
  }

  @GetMapping
  public List<Tweet> getAllTweets() {
    return tweetService.getAllTweets();
  }

  @GetMapping("{id}")
  public ResponseEntity<TweetDTO> getTweetById(@PathVariable(name = "id") long id) {
    return ResponseEntity.ok(tweetService.getTweetById(id));
  }
}
