package ca.venkasritharan.twitterclone.data.repository;

import ca.venkasritharan.twitterclone.data.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
  Optional<Role> findByName(String rolename);
}
