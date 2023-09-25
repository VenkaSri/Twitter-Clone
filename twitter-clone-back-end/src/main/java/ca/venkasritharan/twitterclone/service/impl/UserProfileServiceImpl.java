package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.service.UserProfileService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class UserProfileServiceImpl implements UserProfileService {

  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;
  private final ModelMapper mapper;


  public UserProfileServiceImpl(UserRepository userRepository, FollowerRepository followerRepository, ModelMapper mapper) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
    this.mapper = mapper;
  }

  @Override
  public List<UserDetailsResponse> getAllProfiles() {
    Page<User> users = userRepository.findAll(Pageable.ofSize(10));
    return users.stream()
            .map(user -> mapper.map(user, UserDetailsResponse.class))
            .collect(Collectors.toList());
  }

  @Override
  public List<UserDetailsResponse> allUnfollowedProfiles(Principal principal) {
    Optional<User> optionalUser = userRepository.findByUsername(principal.getName());

    if (optionalUser.isPresent()) {

    }
    return null;

  }





  @Override
  public ResponseEntity<Long> getFollowingCount(Principal principal) {

    long followingCount = followerRepository.countFollowersByFollower_Username(principal.getName());
    return ResponseEntity.ok(followingCount);
  }

  private String getPrincipalUsername() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    return authentication.getName();
  }


  //  @Override
//  public List<UserDetailsResponse> getAllProfiles() {
//    List<User> users = userRepository.findAll();
//    List<UserDetailsResponse> userDetailsResponses = new ArrayList<>();
//
//    for (User user : users) {
//      UserDetailsResponse userDetailsResponse = mapper.map(user, UserDetailsResponse.class);
//      userDetailsResponses.add(userDetailsResponse);
//    }
//
//    return userDetailsResponses;
//  }
}
