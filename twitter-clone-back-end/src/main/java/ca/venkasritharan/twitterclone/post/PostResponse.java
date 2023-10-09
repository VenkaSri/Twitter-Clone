package ca.venkasritharan.twitterclone.post;


import ca.venkasritharan.twitterclone.response.MessageAndCodeResponse;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse extends MessageAndCodeResponse {
  private Long postId;
}
