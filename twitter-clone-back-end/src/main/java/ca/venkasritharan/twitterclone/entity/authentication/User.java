package ca.venkasritharan.twitterclone.entity.authentication;

import ca.venkasritharan.twitterclone.entity.Follower;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private long id;
  private String username;
  @Size(min = 8, max = 120)
  @NotBlank(message = "Password must not be blank")
  private String password;
  @NotBlank(message = "Name must not be blank")
  @Size(min = 1, max = 50)
  private String name;
  @Email
  @Column(unique = true)
  private String email;
  @Column(unique = true)
  @Size(min = 10, max = 15)
  private String phoneNumber;
  private Long tweetCount = 0L;
  private Long followerCount = 0L;
  private Long followingCount = 0L;

  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinTable(name = "users_roles",
          joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
          inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
  private Set<Role> roles;



}
