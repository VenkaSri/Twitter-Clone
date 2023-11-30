package ca.venkasritharan.twitterclone.core.entity;


import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.core.entity.PostLike;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

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
  @Column(length = 400)
  private String text;
  private String createdAt;
  private String photo1;
  private String photo2;
  private String photo3;
  private String photo4;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "user_id")
  private User user;



  @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<PostLike> likedByUsers = new HashSet<>();






}
