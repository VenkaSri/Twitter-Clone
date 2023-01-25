package ca.venkasritharan.twitterclone.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "trends")
@Data
public class Trend {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private String name;
  private String url;
  private String promoted_content;
  private String query;
  private long tweet_volume;
}
