package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.Follower;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.service.AccountService;
import ca.venkasritharan.twitterclone.util.response.Response;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.*;

@Service
public class AccountServiceImpl implements AccountService {

  private UserRepository userRepository;
  private FollowerRepository followerRepository;

  public AccountServiceImpl(UserRepository userRepository, FollowerRepository followerRepository ) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
  }

  @Override
  public Response<Map<String, Object>> getAllAccounts(String emailOrPhone) {
    Map<String, Object> responseData = new HashMap<>();
    List<User> users = getUsers(0, 50);
    List<Map<String, String>> userList = mapUsersToResponse(users, emailOrPhone);
    responseData.put("users", userList);
    return new Response<>(200, responseData);
  }

  private List<User> getUsers(int pageNum, int pageSize) {
    Pageable pageable = PageRequest.of(pageNum, pageSize);
    return userRepository.findAll(pageable).getContent();
  }

  private List<Map<String, String>> mapUsersToResponse(List<User> users, String emailOrPhone) {
    List<Map<String, String>> userList = new ArrayList<>();
    for (User user : users) {
      if (!user.getEmail().equals(emailOrPhone)) {
        Map<String, String> userMap = new HashMap<>();
        userMap.put("username", user.getUsername());
        userMap.put("name", user.getName());
        userList.add(userMap);
      }
    }
    return userList;
  }

  @Override
  public Response<String> follow(String followerEmailOrPhone, String followedUsername) {
    User follower = userRepository.findByEmail(followerEmailOrPhone).get();
    User followedUser = userRepository.findByUsername(followedUsername).get();
    if (follower == null || followedUser == null) {
      return new Response<>(404, "Invalid email or username");
    }
    return mapToEntity(follower.getId(), followedUser.getId());
  }

  public Response<String> mapToEntity(long followerId, long followedId) {
    User follower = userRepository.findById(followerId).orElse(null);
    User followedUser = userRepository.findById(followedId).orElse(null);

    if (follower == null || followedUser == null) {
      return new Response<>(404, "Invalid user ID");
    }

    follower.setFollowingCount(follower.getFollowingCount());
    followedUser.setFollowerCount(followedUser.getFollowerCount());

    Follower userFollows = new Follower();
    userFollows.setFollower(follower);
    userFollows.setFollowed(followedUser);

    followerRepository.save(userFollows);

    return new Response<>(200, "User followed successfully");
  }

}
