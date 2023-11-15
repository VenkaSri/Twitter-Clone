package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.service.TrendService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/trends")
public class TrendController {

  private final TrendService trendService;

  public TrendController(TrendService trendService) {
    this.trendService = trendService;
  }

  @GetMapping
  public void getTrends() {
    trendService.getCurrentTrends();
  }
}
