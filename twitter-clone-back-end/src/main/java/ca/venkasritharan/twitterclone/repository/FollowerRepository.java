package ca.venkasritharan.twitterclone.repository;

import ca.venkasritharan.twitterclone.entity.Follower;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FollowerRepository extends JpaRepository<Follower, Long> {
}
