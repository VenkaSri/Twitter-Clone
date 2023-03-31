package ca.venkasritharan.twitterclone.controller;


import ca.venkasritharan.twitterclone.dto.LoginDTO;
import ca.venkasritharan.twitterclone.dto.ValidateEmailOrPhoneDTO;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/user")
public class ProfileController {

  private UsernameService usernameService;

  public ProfileController(UsernameService usernameService) {
    this.usernameService = usernameService;
  }

  @GetMapping("/username/{email}")
  public Response<String> getUsername(@PathVariable(name = "email") String emailOrPhone) {
    return usernameService.getUsername(emailOrPhone);
  }

}
