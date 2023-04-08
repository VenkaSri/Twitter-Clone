package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import java.util.*;

@Service
public class AccountServiceImpl implements AccountService {

  UserRepository userRepository;

  public AccountServiceImpl(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public Response<Map<String, Object>> getAllAccounts() {
    Map<String, Object> responseData = new HashMap<>();
    List<User> users = getUsers(0, 50);
    List<Map<String, String>> userList = mapUsersToResponse(users);
    responseData.put("users", userList);
    return new Response<>(200, responseData);
  }

  private List<User> getUsers(int pageNum, int pageSize) {
    Pageable pageable = PageRequest.of(pageNum, pageSize);
    return userRepository.findAll(pageable).getContent();
  }

  private List<Map<String, String>> mapUsersToResponse(List<User> users) {
    List<Map<String, String>> userList = new ArrayList<>();
    for (User user : users) {
      Map<String, String> userMap = new HashMap<>();
      userMap.put("username", user.getUsername());
      userMap.put("name", user.getName());
      userList.add(userMap);
    }
    return userList;
  }

}
