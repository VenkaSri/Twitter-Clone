package ca.venkasritharan.twitterclone.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtils {
  private SecurityUtils() {
  }

  public static String getUsernameFromAuthentication() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if (authentication != null) {
      return authentication.getName();
    }
    throw new IllegalStateException("Authentication object was not found in the security context");
  }


}
