package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.entity.authentication.User;
import ca.venkasritharan.twitterclone.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.service.AccountService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


import java.security.Principal;
import java.util.*;

@Service
public class AccountServiceImpl implements AccountService {

  private final ModelMapper mapper;
  private final UserRepository userRepository;

  public AccountServiceImpl(UserRepository userRepository, ModelMapper mapper) {
    this.mapper = mapper;
    this.userRepository = userRepository;
  }

  @Override
  public UserDetailsResponse getUserDetails(Principal principal) {
    Optional<User> optionalUser = userRepository.findByUsername(principal.getName());
    if (optionalUser.isPresent()) {
      User user = optionalUser.get();
      return mapper.map(user, UserDetailsResponse.class);
    } else {
      throw new UserNotFoundException("User not found");
    }
  }
}
