package ca.venkasritharan.twitterclone.entity.authentication;

import ca.venkasritharan.twitterclone.entity.UserFollows;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;

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
  @Column(unique = true)
  @Size(min = 4, max = 15)
  private String username;
  private String password;
  private String name;
  private String email;
  private String phoneNumber;
  private Long tweetCount;
  private Long followerCount;
  private Long followingCount;
  @OneToMany(mappedBy = "user")
  private Set<UserFollows> followers = new HashSet<>();

  @OneToMany(mappedBy = "followedUser")
  private Set<UserFollows> following = new HashSet<>();


  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinTable(name = "users_roles",
          joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
          inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
  private Set<Role> roles;

}
