package ca.venkasritharan.twitterclone.data.repository;

import ca.venkasritharan.twitterclone.data.entity.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRoleRepository extends JpaRepository<UserRole, Integer> {
}
