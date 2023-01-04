package ca.venkasritharan.twitterclone.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class TweetDTO {
  private Long Id;
  private String text;
  private LocalDate createdAt;
}
