package ca.venkasritharan.twitterclone.response;


import ca.venkasritharan.twitterclone.response.MessageAndCodeResponse;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse extends MessageAndCodeResponse {
  private Long postId;
  private String text;
  private String createdAt;
  private List<String> media;
  private Long likes;
  private UserDetailsResponse userDetails;

}
