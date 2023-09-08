package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.dto.*;
import ca.venkasritharan.twitterclone.exception.UserAlreadyExistsException;
import ca.venkasritharan.twitterclone.response.AuthStatusResponse;
import ca.venkasritharan.twitterclone.response.ErrorResponse;
import ca.venkasritharan.twitterclone.response.JwtResponse;
import ca.venkasritharan.twitterclone.security.jwt.JwtTokenProvider;
import ca.venkasritharan.twitterclone.service.AuthenticationService;
import ca.venkasritharan.twitterclone.service.RegistrationService;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.response.Response;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.SignatureException;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

  private AuthenticationService authenticationService;
  private RegistrationService registrationService;
  private JwtTokenProvider jwtTokenProvider;

  public AuthenticationController(AuthenticationService authenticationService, RegistrationService registrationService, JwtTokenProvider jwtTokenProvider) {
    this.authenticationService = authenticationService;
    this.registrationService = registrationService;
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @PostMapping(value = {"/login", "/sign-in"})
  public ResponseEntity<JwtResponse> login(@RequestBody LoginDTO loginDTO) {
    String token = authenticationService.login(loginDTO);

    JwtResponse jwtResponse = new JwtResponse();
    jwtResponse.setAccessToken(token);

    return new ResponseEntity<>(jwtResponse, HttpStatus.OK);
  }




//  @GetMapping("/check-emailOrPhone")
//  public ResponseEntity<Response<String>> validateEmailOrPhone(@RequestParam("emailOrPhone") String emailOrPhone) {
//    try {
//      authenticationService.validateEmailOrPhone(emailOrPhone);
//      return ResponseEntity.ok(new Response<>(200, "Email or phone is available."));
//    } catch (UserAlreadyExistsException e) {
//      return ResponseEntity.ok(new Response<>(409, "User with the given email or phone already exists."));
//    }
//  }

//  @GetMapping("/status")
//  public ResponseEntity<Map<String, Boolean>> getAuthStatus(HttpServletRequest request) {
//    try {
//      Optional<Cookie> optionalAuthTokenCookie = findAuthTokenCookie(request);
//      if (optionalAuthTokenCookie.isPresent()) {
//        String token = optionalAuthTokenCookie.get().getValue();
//        boolean isTokenValid = jwtTokenProvider.validateToken(token);
//        if (isTokenValid) {
//          return createAuthenticatedResponse();
//        }
//      }
//    } catch (Exception e) {
//      // Log the exception and consider returning a 500 Internal Server Error
//    }
//    return createUnauthenticatedResponse();
//
//  }

  @GetMapping("/status")
  public ResponseEntity<Response<AuthStatusResponse>> getAuthStatus(HttpServletRequest request) {
    try {
      Optional<Cookie> optionalAuthTokenCookie = findAuthTokenCookie(request);
      if (optionalAuthTokenCookie.isPresent()) {
        String token = optionalAuthTokenCookie.get().getValue();
        System.out.println(optionalAuthTokenCookie.get().getValue());
        try {
          boolean isTokenValid = jwtTokenProvider.validateToken(token);
          if (isTokenValid) {
            return new ResponseEntity<>(createAuthenticatedResponse(), HttpStatus.OK);
          } else {
            return new ResponseEntity<>(createUnauthenticatedResponse("Invalid Token"), HttpStatus.UNAUTHORIZED);
          }
        } catch (ExpiredJwtException e) {
          return new ResponseEntity<>(createErrorResponse("Token has expired"), HttpStatus.UNAUTHORIZED);
        } catch (MalformedJwtException e) {
          return new ResponseEntity<>(createErrorResponse("Malformed token"), HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
          // Other token-related errors
          return new ResponseEntity<>(createErrorResponse("Invalid token"), HttpStatus.UNAUTHORIZED);
        }
      } else {
        return new ResponseEntity<>(createUnauthenticatedResponse("Token not found"), HttpStatus.UNAUTHORIZED);
      }
    } catch (Exception e) {
      // Log the exception
      // Consider returning a 500 Internal Server Error
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private Response<AuthStatusResponse> createErrorResponse(String errorMessage) {
    System.out.println(errorMessage);
    List<ErrorResponse> errors = new ArrayList<>();
    errors.add(new ErrorResponse(401, errorMessage));

    return new Response<>(401, "Not Authenticated", new AuthStatusResponse(false), errors);
  }




  private Optional<Cookie> findAuthTokenCookie(HttpServletRequest request) {
    Cookie[] cookies = request.getCookies();
    if (cookies == null) {
      return Optional.empty();
    }
    return Arrays.stream(cookies)
            .filter(cookie -> "authToken".equals(cookie.getName()))
            .findFirst();
  }

  private Response<AuthStatusResponse> createAuthenticatedResponse() {
    return new Response<>(200, "Authenticated", new AuthStatusResponse(true), null);
  }

  private Response<AuthStatusResponse> createUnauthenticatedResponse(String errorMessage) {
    List<ErrorResponse> errors = new ArrayList<>();
    errors.add(new ErrorResponse(401, errorMessage));
    return new Response<>(401, "Not Authenticated", new AuthStatusResponse(false), errors);
  }
}






