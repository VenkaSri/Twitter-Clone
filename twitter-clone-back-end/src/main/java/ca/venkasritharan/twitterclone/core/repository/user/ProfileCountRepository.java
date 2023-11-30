package ca.venkasritharan.twitterclone.core.repository.user;

import ca.venkasritharan.twitterclone.core.entity.ProfileCount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfileCountRepository extends JpaRepository<ProfileCount, Long> {
}
