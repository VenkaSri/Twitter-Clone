package ca.venkasritharan.twitterclone.application.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.File;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PostDTO {
  private Long postId;
  private String text;
  private String createdAt;
  List<String> photos;
  private String photo1;
  private String photo2;
  private String photo3;
  private String photo4;
}
