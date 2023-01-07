package ca.venkasritharan.twitterclone.dto;

import ca.venkasritharan.twitterclone.entity.Tweet;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
public class TweetDTO {
  private Long Id;
  private String text;
  private LocalDate createdAt;
}
