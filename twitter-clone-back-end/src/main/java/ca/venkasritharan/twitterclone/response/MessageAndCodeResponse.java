package ca.venkasritharan.twitterclone.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MessageAndCodeResponse {
  private String message;
  private int status;
}
