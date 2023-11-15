package ca.venkasritharan.twitterclone.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UsersSuggestionResponse {
  private List<UserDetailsResponse> content;
  private int pageNo;
  private int pageSize;
  private long totalElements;
  private int totalPages;
}
