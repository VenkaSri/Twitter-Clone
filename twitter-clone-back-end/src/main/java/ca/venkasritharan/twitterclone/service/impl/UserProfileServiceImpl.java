package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.service.UserProfileService;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class UserProfileServiceImpl implements UserProfileService {

  private final UserRepository userRepository;
  private final ModelMapper mapper;


  public UserProfileServiceImpl(UserRepository userRepository, ModelMapper mapper) {
    this.userRepository = userRepository;
    this.mapper = mapper;
  }

  @Override
  public List<UserDetailsResponse> getAllProfiles() {
    Page<User> users = userRepository.findAll(Pageable.ofSize(10));
    return users.stream()
            .map(user -> mapper.map(user, UserDetailsResponse.class))
            .collect(Collectors.toList());
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
