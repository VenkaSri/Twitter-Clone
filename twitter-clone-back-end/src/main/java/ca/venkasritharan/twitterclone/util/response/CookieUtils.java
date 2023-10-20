package ca.venkasritharan.twitterclone.util.response;


import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;

public class CookieUtils {

  public static void clearAuthTokenCookie(HttpServletResponse response) {
    Cookie authTokenCookie = new Cookie("authToken", null);
    authTokenCookie.setPath("/");
    authTokenCookie.setMaxAge(0);
    authTokenCookie.setHttpOnly(true);
    authTokenCookie.setSecure(true); // Set this to true if you are using HTTPS
    response.addCookie(authTokenCookie);
  }

    public static void addAuthTokenCookie(HttpServletResponse httpResponse, String token) {
    Cookie cookie = new Cookie("authToken", token);
    cookie.setHttpOnly(true);
    cookie.setMaxAge(604800); // 7 days
    cookie.setPath("/");
    httpResponse.addCookie(cookie);
  }
}

