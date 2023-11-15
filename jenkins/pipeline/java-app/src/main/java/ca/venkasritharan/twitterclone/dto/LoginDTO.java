package ca.venkasritharan.twitterclone.dto;

import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {
  private String usernameOrEmailOrPhonenumber;
  @Size(min = 8)
  private String password;
}
