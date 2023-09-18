package ca.venkasritharan.twitterclone.response;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonInclude;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Response<T> {
  @JsonIgnore
  private int status;
  private String message;
  private T data;
  List<ErrorResponse> errors;

}
