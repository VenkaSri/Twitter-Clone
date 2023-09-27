package ca.venkasritharan.twitterclone.repository.user;

import ca.venkasritharan.twitterclone.entity.user.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

  Boolean existsByEmail(String email);




}
