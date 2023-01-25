package ca.venkasritharan.twitterclone.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
public class Trends {
  private List<Trend> trends;
  @JsonIgnore
  private String as_of;
  @JsonIgnore
  private String created_at;
  @JsonIgnore
  private List<Location> locations;
}
