package ca.venkasritharan.twitterclone.dto;

import jakarta.persistence.Entity;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterDTO {
  private String name;
  private LocalDate dob;
  private String email;
  private String phoneNumber;
  private String password;
}
