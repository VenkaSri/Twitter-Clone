package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.UsernameService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

@Service
public class UsernameServiceImpl implements UsernameService {

  private UserRepository userRepository;

  @Override
  public Response<Map<String, Object>> getNameAndUsername(String email) {
    Optional<User> user = userRepository.findByEmail(email);
    if (!user.isPresent()) {
      return new Response<>(404, null);
    }
    Map<String, Object> responseData = new HashMap<>();
    responseData.put("username", user.get().getUsername());
    responseData.put("name", user.get().getName());
    return new Response<>(200, responseData);
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

  @Override
  public Response<String> checkUsername(String username) {
    Optional<User> user = userRepository.findByUsername(username);
    if (!user.isPresent()) {
      return new Response<>(200, "Username " + username + " is available");
    }
    return new Response<>(404, "User with username " + username + " already exists");
  }

  @Override
  public Response<String> updateUsername(String username, String email) {
    User userByEmail = userRepository.findByEmail(email).get();
    userByEmail.setUsername(username);
    userRepository.save(userByEmail);
    return new Response<>(200, "Username updated for user with email " + email);
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
    long min = (long) Math.pow(10, size - 1);
    long max = (long) Math.pow(10, size) - 1;
    long randomNum = (min + random.nextLong((max - min + 1)));
    String username =  name + randomNum;
    return username;
  }
}
