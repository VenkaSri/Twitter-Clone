package ca.venkasritharan.twitterclone.data.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@Entity
@Table(name = "roles")
public class Role {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "roleid")
  private long id;

  @Column(length = 60)
  private String name;
}
