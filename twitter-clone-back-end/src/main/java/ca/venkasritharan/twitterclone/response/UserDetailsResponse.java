package ca.venkasritharan.twitterclone.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailsResponse {
  private long id;
  private String name;
  private String username;
  private String email;
}
