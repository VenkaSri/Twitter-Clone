package ca.venkasritharan.twitterclone.response;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsernameAvailabilityResponse {
  private String message;
  private boolean isUsernameAvailable;
}
