package ca.venkasritharan.twitterclone.util.response;

import ca.venkasritharan.twitterclone.response.RegistrationResponse;
import ca.venkasritharan.twitterclone.response.Response;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

public class RegistrationResponseBuilder {

  public static Response<RegistrationResponse> build(Response<RegistrationResponse> registrationResponse,
                                                           HttpServletResponse httpResponse) throws IOException {
    int statusCode = registrationResponse.getStatus();
    RegistrationResponse data = registrationResponse.getData();

    if (statusCode == HttpStatus.OK.value()) {
      handleSuccessfulRegistration(httpResponse, data.getToken());
      return Response<>(statusCode, data.getMessage(), data, null);
    } else {
      return handleUnsuccessfulRegistration(statusCode, data);
    }
  }

  private static void handleSuccessfulRegistration(HttpServletResponse httpResponse, String authToken) throws IOException {
    Cookie cookie = new Cookie("auth_token", authToken);
    cookie.setHttpOnly(true);
    cookie.setPath("/");
    httpResponse.addCookie(cookie);
  }

  private static ResponseEntity<RegistrationResponse> handleUnsuccessfulRegistration(int statusCode, RegistrationResponse data) {
    return ResponseEntity.status(statusCode).body(data);
  }

}
