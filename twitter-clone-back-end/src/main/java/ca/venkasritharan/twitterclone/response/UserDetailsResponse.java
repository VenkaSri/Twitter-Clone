package ca.venkasritharan.twitterclone.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

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
  private String bio;
  private Long followerCount;
  private Long followingCount;
  private List<Long> likedPostsIds;

  @JsonInclude(JsonInclude.Include.ALWAYS) // This field will always be included
  private String profile_image_url;
}
