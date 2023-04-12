package ca.venkasritharan.twitterclone.repository;

import ca.venkasritharan.twitterclone.entity.UserFollows;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserFollowsRepository extends JpaRepository<UserFollows, Long> {
}
