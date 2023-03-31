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
    System.out.println(email);
    Optional<User> user = userRepository.findByEmail(email);
    checkNameLength(user.get().getName(), email);
  }

  public void checkNameLength(String name, String email) {
    if (name.length() == 15) {
      checkIfUserNameExists(name, email);
    } else if (name.length() < 15) {
      checkIfUserNameExists(name, email);
    } else {
      checkIfUserNameExists(name.replaceAll("\\s+", "").substring(0, 15), email);
    }
  }

  private void checkIfUserNameExists(String name, String email) {
    if (userRepository.existsByUsername(name)) {
        String halvedName = name.substring(0, name.length() / 2);
        checkNameLength(generateRandomUsername(halvedName, 15 - halvedName.length()), email);
    } else {
      Optional<User> user = userRepository.findByEmail(email);
      user.get().setUsername(name);
      userRepository.save(user.get());
    }
  }

  private String generateRandomUsername(String name, int size) {
    Random random = new Random(System.currentTimeMillis());
    int min = (int) Math.pow(10, size - 1);
    int max = (int) Math.pow(10, size) - 1;
    int randomNum = min + random.nextInt(max - min + 1);
    String username =  name + randomNum;
    return username;
  }
}
