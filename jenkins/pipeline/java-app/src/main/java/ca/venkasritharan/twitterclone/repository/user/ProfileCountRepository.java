package ca.venkasritharan.twitterclone.repository.user;

import ca.venkasritharan.twitterclone.entity.user.ProfileCount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileCountRepository extends JpaRepository<ProfileCount, Long> {
}
