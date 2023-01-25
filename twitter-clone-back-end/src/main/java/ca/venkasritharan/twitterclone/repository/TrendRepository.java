package ca.venkasritharan.twitterclone.repository;

import ca.venkasritharan.twitterclone.entity.Trend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrendRepository extends JpaRepository<Trend, Long> {
}
