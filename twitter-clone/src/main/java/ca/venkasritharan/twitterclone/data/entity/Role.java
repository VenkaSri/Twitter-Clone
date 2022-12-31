package ca.venkasritharan.twitterclone.data.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "nottwitterusersroles")
public class Role {

  @Id
  @Column(name = "rolesid")
  private int id;

  @Column(name = "rolename")
  private String rolename;

  @OneToMany(mappedBy = "nottwitterusersroles")
  private List<UserRole> roleList;
}
