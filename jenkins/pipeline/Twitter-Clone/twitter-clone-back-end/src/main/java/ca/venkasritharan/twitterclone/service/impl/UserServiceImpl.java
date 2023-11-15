package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.UserService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  private UserRepository userRepository;

  public UserServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public Response<String> getFollowingCount(String usernameOrEmail) {
    User user = userRepository.findByEmail(usernameOrEmail).get();
    return new Response<>(200, user.getFollowingCount().toString());
  }
}
