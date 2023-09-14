package ca.venkasritharan.twitterclone.security.jwt;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
  private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);
  @Override
  public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
    // Retrieve the JWT token from the Cookie header
    String jwtToken = getJwtTokenFromCookie(request);
    System.out.println(
            jwtToken
    );
    if (jwtToken != null) {
      logger.error("Unauthorized access detected. Message: {}", authException.getMessage());
      response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
    } else {
      // Handle the case where the token is not found in the Cookie header
      response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "JWT token not found in Cookie.");
    }
  }

  // Helper method to extract JWT token from Cookie header
  private String getJwtTokenFromCookie(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    System.out.println(cookies);
    if (cookies != null) {
      for (Cookie cookie : cookies) {
        if ("authToken".equals(cookie.getName())) { // Replace "authToken" with your cookie name
          return cookie.getValue();
        }
      }
    }
    return null;
  }

}
