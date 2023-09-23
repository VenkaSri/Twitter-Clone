package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.Follower;
import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.service.UserSuggestionService;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserSuggestionServiceImpl implements UserSuggestionService {

  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;
  private final ModelMapper mapper;

  public UserSuggestionServiceImpl(UserRepository userRepository, FollowerRepository followerRepository, ModelMapper mapper) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
    this.mapper = mapper;
  }
  @Override
  public List<UserDetailsResponse> suggestUsers() {
    String principalUsername = getPrincipalUsername();
    List<User> allUsers = userRepository.findAll();
    List<Follower> followedUsers = followerRepository.findByFollowerUsername(principalUsername);

    return filterUsersNotFollowedByCurrentUser(allUsers, followedUsers);
  }

  private String getPrincipalUsername() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    return authentication.getName();
  }

  private List<UserDetailsResponse> filterUsersNotFollowedByCurrentUser(List<User> allUsers, List<Follower> followedUsers) {
    String principalUsername = getPrincipalUsername();
    List<UserDetailsResponse> userDetailsResponses = new ArrayList<>();

    for (User user : allUsers) {
      if (isNotCurrentUser(user, principalUsername) && isNotFollowed(user, followedUsers)) {
        UserDetailsResponse userDetailsResponse = mapper.map(user, UserDetailsResponse.class);
        userDetailsResponses.add(userDetailsResponse);
      }
    }

    return userDetailsResponses;
  }

  private boolean isNotCurrentUser(User user, String principalUsername) {
    return !user.getUsername().equals(principalUsername);
  }

  private boolean isNotFollowed(User user, List<Follower> followedUsers) {
    for (Follower follower : followedUsers) {
      if (follower.getFollowed().getId() == (user.getId())) {
        return false;
      }
    }
    return true;
  }

}
