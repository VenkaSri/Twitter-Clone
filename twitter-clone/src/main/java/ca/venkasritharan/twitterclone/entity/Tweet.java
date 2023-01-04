package ca.venkasritharan.twitterclone.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "tweets")
public class Tweet {
  @GenericGenerator(name = "tweetIdGenerator", strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
                 parameters = {
                         @org.hibernate.annotations.Parameter(name = "sequence_name", value = "WIKI_SEQUENCE"),
                         @org.hibernate.annotations.Parameter(name = "initial_value", value = "1000"),
                         @org.hibernate.annotations.Parameter(name = "increment_size", value = "1")
                 })
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long tweetId;
  private String text;
  private LocalDate createdAt;
}
