package ca.venkasritharan.twitterclone.repository.authentication;

import ca.venkasritharan.twitterclone.entity.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserRepository extends JpaRepository<User, Long> {


  Optional<User> findByUsername(String username);
  Boolean existsByUsername(String name);

  @Query("SELECT u.username FROM User u")
  Set<String> findAllUsernames();


}
