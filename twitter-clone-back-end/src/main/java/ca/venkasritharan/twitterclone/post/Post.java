package ca.venkasritharan.twitterclone.post;


import ca.venkasritharan.twitterclone.entity.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "post")
public class Post {
  @Id
  @GeneratedValue(generator="my_seq")
  @SequenceGenerator(name="my_seq",sequenceName="tweets_tweet_id_seq", allocationSize=1)
  private Long postId;
  private String text;
  private LocalDateTime createdAt;
  private String photo1;
  private String photo2;
  private String photo3;
  private String photo4;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User user;




}
