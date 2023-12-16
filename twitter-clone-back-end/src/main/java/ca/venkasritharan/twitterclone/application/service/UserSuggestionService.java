package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class UserSuggestionService {

  private final UserRepository userRepository;

  public UserSuggestionService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  public Response<UsersSuggestionResponse> suggestUsers(int page, int pageSize) {
    User principalUser = getAuthenticatedUser();
    Pageable pageable = PageRequest.of(page, pageSize);
    Page<User> usersPage = userRepository.findAllExceptPrincipalUser(pageable, principalUser.getId());

    List<UserDetailsResponse> userDetailsResponses = usersPage.getContent().stream()
            .map(this::convertToUserDetailsResponse)
            .collect(Collectors.toList());

    UsersSuggestionResponse usersSuggestionResponse = new UsersSuggestionResponse(userDetailsResponses,
            usersPage.getNumber(),
            usersPage.getSize(),
            usersPage.getTotalElements(),
            usersPage.getTotalPages());

    return createResponse(usersSuggestionResponse);
  }

  private UserDetailsResponse convertToUserDetailsResponse(User user) {
    UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
    userDetailsResponse.setId(user.getId());
    userDetailsResponse.setUsername(user.getUsername());
    userDetailsResponse.setBio(user.getProfile().getBio());
    userDetailsResponse.setProfile_image_url(user.getProfile().getProfile_image_url());
    userDetailsResponse.setName(user.getProfile().getName());
    return userDetailsResponse;
  }

  private User getAuthenticatedUser() {
    String username = SecurityContextHolder.getContext().getAuthentication().getName();
    return userRepository.findByUsername(username)
            .orElseThrow(() -> new UserNotFoundException("User not found"));
  }

  private Response<UsersSuggestionResponse> createResponse(UsersSuggestionResponse usersSuggestionResponse) {
    Response<UsersSuggestionResponse> response = new Response<>();
    response.setMessage("Successfully retrieved users.");
    response.setStatus(200);
    response.setData(usersSuggestionResponse);
    return response;
  }


}


