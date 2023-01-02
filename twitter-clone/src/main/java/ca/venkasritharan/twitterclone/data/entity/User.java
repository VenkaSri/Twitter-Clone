package ca.venkasritharan.twitterclone.data.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "users", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"username"}),
        @UniqueConstraint(columnNames = {"email"})
})
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "userid")
  private int id;
  private String username;
  private String password;
  private String email;

  @Column(name = "first_name")
  private String firstName;

  @Column(name = "last_name")
  private String lastName;

  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinTable(name = "user_roles",
          joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "userid"),
          inverseJoinColumns = @JoinColumn(name = "role_id", referencedColumnName = "roleid"))
  private Set<Role> roles;
}
