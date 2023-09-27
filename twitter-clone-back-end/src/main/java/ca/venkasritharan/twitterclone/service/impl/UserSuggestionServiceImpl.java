//package ca.venkasritharan.twitterclone.service.impl;
//
//import ca.venkasritharan.twitterclone.entity.Follower;
//import ca.venkasritharan.twitterclone.entity.user.User;
//import ca.venkasritharan.twitterclone.repository.FollowerRepository;
//import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
//import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
//import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
//import ca.venkasritharan.twitterclone.service.UserSuggestionService;
//import org.modelmapper.ModelMapper;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Pageable;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class UserSuggestionServiceImpl implements UserSuggestionService {
//
//  private final UserRepository userRepository;
//  private final FollowerRepository followerRepository;
//  private final ModelMapper mapper;
//
//  public UserSuggestionServiceImpl(UserRepository userRepository, FollowerRepository followerRepository, ModelMapper mapper) {
//    this.userRepository = userRepository;
//    this.followerRepository = followerRepository;
//    this.mapper = mapper;
//  }
//
//  @Override
//  public UsersSuggestionResponse suggestUsers(int page, int pageSize) {
//    String principalUsername = getPrincipalUsername();
//    System.out.println(principalUsername);
//    List<Follower> followedUsers = followerRepository.findByFollowerUsername(principalUsername);
//
//    Pageable pageable = PageRequest.of(page, pageSize); // Create a pageable object for pagination
//    Page<User> usersPage = userRepository.findAll(pageable);
//
//    List<UserDetailsResponse> userDetailsResponses = new ArrayList<>();
//
//    for (User user : usersPage.getContent()) {
//      if (isNotCurrentUser(user, principalUsername) && isNotFollowed(user, followedUsers)) {
//        UserDetailsResponse userDetailsResponse = mapper.map(user, UserDetailsResponse.class);
//        userDetailsResponses.add(userDetailsResponse);
//      }
//    }
//
//
//
//    return createResponse(userDetailsResponses, page, pageSize,usersPage.getTotalElements() );
//  }
//
//  private UsersSuggestionResponse createResponse(List<UserDetailsResponse> userDetailsResponseList, int page, int pageSize, long totalElements) {
//    UsersSuggestionResponse usersSuggestionResponse = new UsersSuggestionResponse();
//    usersSuggestionResponse.setContent(userDetailsResponseList);
//    usersSuggestionResponse.setPageNo(page);
//    usersSuggestionResponse.setTotalElements(totalElements);
//    usersSuggestionResponse.setPageSize(pageSize);
//    return usersSuggestionResponse;
//  }
//
////  @Override
////  public Page<UserDetailsResponse> suggestUsers(int page, int pageSize) {
////    String principalUsername = getPrincipalUsername();
////    Pageable pageable = PageRequest.of(page, pageSize);
////    Page<User> userPage = userRepository.findAll(pageable);
////    List<Follower> followedUsers = followerRepository.findByFollowerUsername(principalUsername);
////
////    return filterUsersNotFollowedByCurrentUser(allUsers, followedUsers);
////  }
//
//  private String getPrincipalUsername() {
//    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//    return authentication.getName();
//  }
//
//  private List<UserDetailsResponse> filterUsersNotFollowedByCurrentUser(List<User> allUsers, List<Follower> followedUsers) {
//    String principalUsername = getPrincipalUsername();
//    List<UserDetailsResponse> userDetailsResponses = new ArrayList<>();
//
//    for (User user : allUsers) {
//      if (isNotCurrentUser(user, principalUsername) && isNotFollowed(user, followedUsers)) {
//        UserDetailsResponse userDetailsResponse = mapper.map(user, UserDetailsResponse.class);
//        userDetailsResponses.add(userDetailsResponse);
//      }
//    }
//
//    return userDetailsResponses;
//  }
//
//  private boolean isNotCurrentUser(User user, String principalUsername) {
//    return !user.getUsername().equals(principalUsername);
//  }
//
//  private boolean isNotFollowed(User user, List<Follower> followedUsers) {
//    for (Follower follower : followedUsers) {
//      if (follower.getFollowed().getId() == (user.getId())) {
//        return false;
//      }
//    }
//    return true;
//  }
//
//}
