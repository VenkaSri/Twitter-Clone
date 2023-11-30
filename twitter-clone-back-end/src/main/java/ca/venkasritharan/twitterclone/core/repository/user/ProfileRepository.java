package ca.venkasritharan.twitterclone.core.repository.user;

import ca.venkasritharan.twitterclone.core.entity.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

  Boolean existsByEmail(String email);




}
