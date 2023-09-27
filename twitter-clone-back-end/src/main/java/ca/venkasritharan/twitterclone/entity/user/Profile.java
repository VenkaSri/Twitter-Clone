package ca.venkasritharan.twitterclone.entity.user;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name = "profile")
public class Profile {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  @NotBlank(message = "Name must not be blank")
  @Size(min = 1, max = 50)
  private String name;
  @Email
  @Column(unique = true)
  private String email;
  private LocalDate dob;
  private String profile_image_url;

  @OneToOne(mappedBy = "profile")
  private User user;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "profile_count_id", referencedColumnName = "id")
  private ProfileCount profileCount;





}
