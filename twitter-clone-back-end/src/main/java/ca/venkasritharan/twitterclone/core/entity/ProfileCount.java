package ca.venkasritharan.twitterclone.core.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "profile_count")
public class ProfileCount {

  @Id
  @GeneratedValue (strategy = GenerationType.IDENTITY)
  private long id;
  @Column(name = "follower_count", nullable = false, columnDefinition = "bigint default 0")
  private long followerCount = 0;

  @Column(name = "following_count", nullable = false, columnDefinition = "bigint default 0")
  private long followingCount = 0;

  @Column(name = "tweet_count", nullable = false, columnDefinition = "bigint default 0")
  private long tweetCount = 0;

  @Column(name = "likes_count", nullable = false, columnDefinition = "bigint default 0")
  private long likesCount = 0;

  @OneToOne(mappedBy = "profileCount")
  private Profile profile;

}
