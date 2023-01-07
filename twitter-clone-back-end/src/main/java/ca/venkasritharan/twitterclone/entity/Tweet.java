package ca.venkasritharan.twitterclone.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tweets")
public class Tweet {
  @Id
  @GeneratedValue(generator="my_seq")
  @SequenceGenerator(name="my_seq",sequenceName="tweets_tweet_id_seq", allocationSize=1)
  private Long tweetId;
  private String text;
  private LocalDate createdAt;
}
