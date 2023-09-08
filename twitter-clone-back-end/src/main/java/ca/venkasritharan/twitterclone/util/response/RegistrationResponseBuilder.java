package ca.venkasritharan.twitterclone.util.response;

import ca.venkasritharan.twitterclone.response.ErrorResponse;
import ca.venkasritharan.twitterclone.response.RegistrationResponse;
import ca.venkasritharan.twitterclone.response.Response;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class RegistrationResponseBuilder {

  public static Response<RegistrationResponse> build(Response<RegistrationResponse> registrationResponse,
                                                           HttpServletResponse httpResponse) throws IOException {
    int statusCode = registrationResponse.getStatus();
    RegistrationResponse data = registrationResponse.getData();
    httpResponse.setStatus(statusCode);
    if (statusCode == HttpStatus.OK.value()) {
      handleSuccessfulRegistration(httpResponse, data.getToken());
      return new Response<>(statusCode, data.getMessage(), data, null);
    } else {
      return handleUnsuccessfulRegistration(statusCode, data);
    }
  }

  private static void handleSuccessfulRegistration(HttpServletResponse httpResponse, String authToken) throws IOException {
    Cookie cookie = new Cookie("authToken", authToken);
    cookie.setHttpOnly(true);
    cookie.setPath("/");
    httpResponse.addCookie(cookie);
  }

  private static Response<RegistrationResponse> handleUnsuccessfulRegistration(int statusCode, RegistrationResponse data) {
    ErrorResponse error = new ErrorResponse(statusCode, data.getMessage());

    // Create a list containing the error message (in this case just one error)
    List<ErrorResponse> errors = Collections.singletonList(error);
    return new Response<>(statusCode, "Unsuccessfull", null, errors);
  }

}
