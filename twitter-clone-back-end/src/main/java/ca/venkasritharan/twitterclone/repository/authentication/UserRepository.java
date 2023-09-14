package ca.venkasritharan.twitterclone.repository.authentication;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
  Optional<User> findByEmail(String email);
  Optional<User> findByUsernameOrEmailOrPhoneNumber(String username, String email, String phoneNumber);
  Optional<User> findByUsername(String username);
  Boolean existsByPhoneNumber(String username);
  Boolean existsByEmail(String email);

  Boolean existsByUsername(String name);


}
