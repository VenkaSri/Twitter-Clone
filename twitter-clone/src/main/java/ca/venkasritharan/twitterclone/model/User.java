package ca.venkasritharan.twitterclone.model;


import ca.venkasritharan.twitterclone.data.entity.UserRole;

import java.util.List;

public class User {

  private int id;
  private String username;
  private String password;
  private List<UserRole> roleList;

}
