package ca.venkasritharan.twitterclone.controller;


import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = {"*"})
@RestController
@RequestMapping("/api/user")
public class ProfileController {

  private UsernameService usernameService;

  public ProfileController(UsernameService usernameService) {
    this.usernameService = usernameService;
  }

  @GetMapping("/username/{email}")
  public Response<Map<String, Object>> getUsername(@PathVariable(name = "email") String emailOrPhone) {
    return usernameService.getNameAndUsername(emailOrPhone);
  }

}
