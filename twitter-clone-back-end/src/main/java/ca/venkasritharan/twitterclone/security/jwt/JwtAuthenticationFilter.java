package ca.venkasritharan.twitterclone.security.jwt;

import io.netty.util.internal.StringUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import reactor.netty.http.Cookies;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private JwtTokenProvider jwtTokenProvider;
  private UserDetailsService userDetailsService;

  public JwtAuthenticationFilter(JwtTokenProvider jwtTokenProvider, UserDetailsService userDetailsService) {
    this.jwtTokenProvider = jwtTokenProvider;
    this.userDetailsService = userDetailsService;
  }

  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {


  String token = getTokenFromRequest(request);
  if (StringUtils.hasText(token)  && jwtTokenProvider.validateToken(token)) {
    String username = jwtTokenProvider.getUsername(token);
    UserDetails userDetails  = userDetailsService.loadUserByUsername(username);
    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
  }

  filterChain.doFilter(request, response);

  }

  private String getTokenFromRequest(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    if (cookies != null) {
      for (Cookie cookie : cookies) {
        if ("authToken".equals(cookie.getName())) {
          return cookie.getValue();
        }
      }
    }
    return null;
  }
}
