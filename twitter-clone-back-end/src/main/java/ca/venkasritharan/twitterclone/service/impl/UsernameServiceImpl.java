package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Random;

@Service
public class UsernameServiceImpl implements UsernameService {

  private UserRepository userRepository;

  @Override
  public Response<String> getUsername(String email) {
    Optional<User> user = userRepository.findByEmail(email);
    return new Response<>(200, user.get().getUsername());
  }

  public UsernameServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public void assignUsername(String email) {
    Optional<User> user = userRepository.findByEmail(email);
    Random random = new Random(System.currentTimeMillis());
    String username = user.get().getName() + 1000000 + random.nextInt(5000000);
    user.get().setUsername(username);
    userRepository.save(user.get());
  }
}
