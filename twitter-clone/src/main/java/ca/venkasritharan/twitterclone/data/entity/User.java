package ca.venkasritharan.twitterclone.data.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "nottwitterusers")
@Data
public class User {

  @Id
  @Column(name = "userid")
  private int id;

  @Column(name = "username")
  private String username;

  @Column(name = "password")
  private String password;

  @OneToMany(mappedBy = "nottwitterusers")
  private List<UserRole> roleList;
}
