package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.Role;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest
public class UserRepositoryTest {

  @Autowired
  private UserRepository userRepository;

  @Test
  public void testFindByUsername() {
    User user = new User(
            400,
            "testuser",
            "password",
            "Test User",
            "testuser@example.com",
            "1234567890",
            0L,
            0L,
            0L,
            Collections.singleton(new Role(2, "ROLE_USER"))
    );
    userRepository.save(user);


  }



}

