//package ca.venkasritharan.twitterclone.entity;
//
//import ca.venkasritharan.twitterclone.dto.FollowInfoDTO;
//import ca.venkasritharan.twitterclone.entity.user.User;
//import jakarta.persistence.*;
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//@Getter
//@Setter
//@NoArgsConstructor
//@AllArgsConstructor
//@Entity
//@Table(name = "follower", uniqueConstraints = {
//        @UniqueConstraint(columnNames = {"follower_user_id", "followed_user_id"})
//})
//public class Follower {
//  @Id
//  @GeneratedValue(strategy = GenerationType.IDENTITY)
//  private Long id;
//
//  @ManyToOne
//  @JoinColumn(name = "follower_user_id")
//  private User follower;
//
//  @ManyToOne
//  @JoinColumn(name = "followed_user_id")
//  private User followed;
//
//  @PrePersist
//  public void increaseFollowerAndFollowingCounts() {
//    follower.setFollowingCount(follower.getFollowingCount() + 1);
//    followed.setFollowerCount(followed.getFollowerCount() + 1);
//  }
//
//  @PreRemove
//  public void decreaseFollowerAndFollowingCounts() {
//    follower.setFollowingCount(follower.getFollowingCount() - 1);
//    followed.setFollowerCount(followed.getFollowerCount() - 1);
//  }
//
//  public FollowInfoDTO toFollowerInfo() {
//    return new FollowInfoDTO(follower.getId(), follower.getUsername());
//  }
//
//
//}
//
