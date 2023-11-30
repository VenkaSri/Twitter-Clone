package ca.venkasritharan.twitterclone.application.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class TweetDTO {
  private Long Id;
  private String text;
  private LocalDateTime createdAt;
}
