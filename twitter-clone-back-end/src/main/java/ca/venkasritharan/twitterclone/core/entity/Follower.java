package ca.venkasritharan.twitterclone.core.entity;

import ca.venkasritharan.twitterclone.application.dto.FollowInfoDTO;
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
@Table(name = "follower", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"follower_user_id", "followed_user_id"})
})
public class Follower {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "follower_user_id")
  private User follower;

  @ManyToOne
  @JoinColumn(name = "followed_user_id")
  private User followed;

//  @PrePersist
//  public void increaseFollowerAndFollowingCounts() {
//    follower.setFollowingCount(follower.getFollowingCount() + 1);
//    followed.setFollowerCount(followed.getFollowerCount() + 1);
//  }

  @PrePersist
  public void increaseFollowerAndFollowingCounts() {
    // Update the follower's following count in their profile count
    if (follower != null && follower.getProfile() != null && follower.getProfile().getProfileCount() != null) {
      ProfileCount followerProfileCount = follower.getProfile().getProfileCount();
      ProfileCount followedProfileCount = followed.getProfile().getProfileCount();
      followerProfileCount.setFollowingCount(followerProfileCount.getFollowingCount() + 1);
      followedProfileCount.setFollowerCount(followedProfileCount.getFollowerCount() + 1);
    }
  }

  @PreRemove
  public void decreaseFollowerAndFollowingCounts() {
    // Update the follower's following count in their profile count
    if (follower != null && follower.getProfile() != null && follower.getProfile().getProfileCount() != null) {
      ProfileCount followerProfileCount = follower.getProfile().getProfileCount();
      ProfileCount followedProfileCount = followed.getProfile().getProfileCount();
      followerProfileCount.setFollowingCount(followerProfileCount.getFollowingCount() - 1);
      followedProfileCount.setFollowerCount(followedProfileCount.getFollowerCount() - 1);
    }
  }

//  @PreRemove
//  public void decreaseFollowerAndFollowingCounts() {
//    follower.setFollowingCount(follower.getFollowingCount() - 1);
//    followed.setFollowerCount(followed.getFollowerCount() - 1);
//  }

  public FollowInfoDTO toFollowerInfo() {
    return new FollowInfoDTO(follower.getId(), follower.getUsername());
  }


}

