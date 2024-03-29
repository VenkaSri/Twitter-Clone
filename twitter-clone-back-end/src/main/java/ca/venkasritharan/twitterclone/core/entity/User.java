package ca.venkasritharan.twitterclone.core.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
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
  @Size(min = 5, max = 15)
  private String username;
  @Size(min = 8, max = 120)
  @NotBlank(message = "Password must not be blank")
  private String password;
  private LocalDateTime accountCreatedAt;

  @OneToOne(cascade = CascadeType.ALL)
  @JoinColumn(name = "profile_id", referencedColumnName = "id")
  private Profile profile;


  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<Post> posts;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<PostLike> likedPosts = new HashSet<>();




//  @OneToOne(cascade = CascadeType.ALL)
//  @JoinColumn(name = "user_count_id", referencedColumnName = "id")
//  private UserCount UserCount;

  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinTable(name = "users_roles",
          joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"),
          inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "id"))
  private Set<Role> roles;



}
