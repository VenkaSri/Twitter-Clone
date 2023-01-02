package ca.venkasritharan.twitterclone.data.dto;

import lombok.Data;

@Data
public class LoginDto {
  private String usernameOrEmail;
  private String password;
}

