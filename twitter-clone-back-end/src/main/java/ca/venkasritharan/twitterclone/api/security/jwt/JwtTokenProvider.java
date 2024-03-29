package ca.venkasritharan.twitterclone.api.security.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtTokenProvider {
  @Value("${app.jwt-secret}")
  private String jwtSecret;
  @Value("${app-jwt-expiration-milliseconds}")
  private long jwtExpirationDate;


  public String createToken(Authentication authentication) {
    String userInfo = authentication.getName();


    Date currentDate = new Date();
    Date expireDate = new Date(currentDate.getTime() + jwtExpirationDate);

    String token = Jwts.builder()
            .setSubject(userInfo)
            .setIssuedAt(new Date())
            .setExpiration(expireDate)
            .signWith(key())
            .compact();

    return token;
  }

  private Key key() {
    return Keys.hmacShaKeyFor(
            Decoders.BASE64.decode(jwtSecret));
  }

  public String getUsername(String token) {
  Claims claims = Jwts.parserBuilder()
            .setSigningKey(key())
            .build()
            .parseClaimsJws(token)
            .getBody();

    String username = claims.getSubject();
    return username;
  }

  public boolean validateToken(String token) {
    try {
      Jwts.parserBuilder()
              .setSigningKey(key())
              .build()
              .parse(token);
      return true;
    } catch (MalformedJwtException ex) {
      throw  new MalformedJwtException("Invalid JWT Token");
    }

  }

}
