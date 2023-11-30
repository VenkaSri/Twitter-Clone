package ca.venkasritharan.twitterclone.core.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tweets_history")
public class TweetHistory {
  @Id
  @GeneratedValue(generator="my_seq")
  @SequenceGenerator(name="my_seq",sequenceName="tweets_history_seq", allocationSize=1)
  private Long tweetVersionId;
  private Long tweetId;
  private String text;
  private LocalDateTime createdAt;
}
