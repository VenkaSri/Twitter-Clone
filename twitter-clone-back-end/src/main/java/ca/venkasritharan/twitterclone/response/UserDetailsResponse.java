package ca.venkasritharan.twitterclone.response;

import ca.venkasritharan.twitterclone.entity.user.Profile;
import ca.venkasritharan.twitterclone.post.postinteractions.PostLike;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserDetailsResponse {
  private Long id;
  private String name;
  private String username;
  private String email;
  private String profile_image_url;
  private String bio;
  private Long followerCount;
  private Long followingCount;
  private List<Long> likedPostsIds;
}
