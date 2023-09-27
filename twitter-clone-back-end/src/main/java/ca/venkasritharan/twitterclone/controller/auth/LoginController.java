//package ca.venkasritharan.twitterclone.controller.auth;
//
//import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
//import ca.venkasritharan.twitterclone.response.ErrorResponse;
//import ca.venkasritharan.twitterclone.response.Response;
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.Collections;
//import java.util.List;
//import java.util.Map;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/auth")
//public class LoginController {
//
//  private UserRepository userRepository;
//  @Autowired
//  private HttpServletRequest requestt;
//
//  public LoginController(UserRepository userRepository) {
//    this.userRepository = userRepository;
//  }
//
//  @PostMapping("/exists")
//  public ResponseEntity<Response<String>> checkIdentifierExists(@RequestBody Map<String, String> request) {
//    long startTime = System.nanoTime();
//    String identifier = request.get("identifier");
//
//
//    boolean exists = userRepository.existsByUsername(identifier) ||
//            userRepository.existsByEmail(identifier) ||
//            userRepository.existsByPhoneNumber(identifier);
//
//
//
//    if (exists) {
//      return ResponseEntity.ok(new Response<>(200, "User exists", "user", null));
//    } else {
//      ErrorResponse error = new ErrorResponse(409, "User does not exist.");
//
//      // Create a list containing the error message (in this case just one error)
//      List<ErrorResponse> errors = Collections.singletonList(error);
//      return ResponseEntity.ok(new Response<>(409, "User with given info does not exist", null, errors));
//    }
//  }
//
//}
