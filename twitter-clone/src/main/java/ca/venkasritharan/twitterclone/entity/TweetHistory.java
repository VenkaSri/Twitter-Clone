package ca.venkasritharan.twitterclone.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tweets_history")
public class TweetHistory {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long tweetVersionId;
  private Long tweetId;
  private String text;
  private LocalDate createdAt;
}
