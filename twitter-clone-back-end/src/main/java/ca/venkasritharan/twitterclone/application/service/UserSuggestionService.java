package ca.venkasritharan.twitterclone.application.service;

import ca.venkasritharan.twitterclone.core.entity.User;
import ca.venkasritharan.twitterclone.api.exception.UserNotFoundException;
import ca.venkasritharan.twitterclone.core.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.core.repository.UserRepository;
import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class UserSuggestionService {

  private final UserRepository userRepository;
  private final FollowerRepository followerRepository;
  private final ModelMapper mapper;

  public UserSuggestionService(UserRepository userRepository, FollowerRepository followerRepository, ModelMapper mapper) {
    this.userRepository = userRepository;
    this.followerRepository = followerRepository;
    this.mapper = mapper;
  }


  public Response<UsersSuggestionResponse> suggestUsers(int page, int pageSize) {

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    Pageable pageable = PageRequest.of(page, pageSize);

    List<UserDetailsResponse> userDetailsResponses = new ArrayList<>();

    Optional<User> principleUser = userRepository.findByUsername(authentication.getName());
    if (principleUser.isPresent()) {
      Page<User> usersPage = userRepository.findAllExceptPrincipalUser(pageable, principleUser.get().getId());
      for (User user: usersPage.getContent()
      ) {
        UserDetailsResponse userDetailsResponse = new UserDetailsResponse();
        userDetailsResponse.setId(user.getId());
        userDetailsResponse.setUsername(user.getUsername());
        userDetailsResponse.setBio(user.getProfile().getBio());
        userDetailsResponse.setProfile_image_url(user.getProfile().getProfile_image_url());
        userDetailsResponse.setName(user.getProfile().getName());
        userDetailsResponses.add(userDetailsResponse);
      }

      UsersSuggestionResponse usersSuggestionResponse = new UsersSuggestionResponse();
      usersSuggestionResponse.setContent(userDetailsResponses);
      usersSuggestionResponse.setPageNo(page);
      usersSuggestionResponse.setTotalElements(usersPage.getTotalElements());
      usersSuggestionResponse.setPageSize(pageSize);
      return createResponse(usersSuggestionResponse);
    } else {
        throw new UserNotFoundException("User not found");
    }

  }


    private  Response<UsersSuggestionResponse> createResponse(UsersSuggestionResponse usersSuggestionResponse) {


    Response<UsersSuggestionResponse> response = new Response<>();
    response.setMessage("Success");
   response.setStatus(200);
    response.setData(usersSuggestionResponse);



    return response;
  }

}


