package ca.venkasritharan.twitterclone.data.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name= "userroles")
public class UserRole {

  @Id
  @Column(name = "joinid")
  private int id;

  @ManyToOne
  @JoinColumn(name = "userid")
  User user;

  @ManyToOne
  @JoinColumn(name = "rolesid")
  Role role;
}
