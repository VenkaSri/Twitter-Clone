package ca.venkasritharan.twitterclone.service.user;

import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import ca.venkasritharan.twitterclone.response.Response;
import ca.venkasritharan.twitterclone.response.UserDetailsResponse;
import ca.venkasritharan.twitterclone.response.UsersSuggestionResponse;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


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
        Pageable pageable = PageRequest.of(page, pageSize);
    Page<User> usersPage = userRepository.findAll(pageable);
    List<UserDetailsResponse> userDetailsResponses = new ArrayList<>();
    for (User user: usersPage.getContent()
         ) {
              UserDetailsResponse userDetailsResponse = mapper.map(user, UserDetailsResponse.class);
        userDetailsResponse.setEmail(user.getProfile().getEmail());
        userDetailsResponse.setName(user.getProfile().getName());
        userDetailsResponses.add(userDetailsResponse);
    }

    UsersSuggestionResponse usersSuggestionResponse = new UsersSuggestionResponse();
    usersSuggestionResponse.setContent(userDetailsResponses);
    usersSuggestionResponse.setPageNo(page);
    usersSuggestionResponse.setTotalElements(usersPage.getTotalElements());
    usersSuggestionResponse.setPageSize(pageSize);



    return createResponse(usersSuggestionResponse);

  }


    private  Response<UsersSuggestionResponse> createResponse(UsersSuggestionResponse usersSuggestionResponse) {


    Response<UsersSuggestionResponse> response = new Response<>();
    response.setMessage("Success");
   response.setStatus(200);
    response.setData(usersSuggestionResponse);



    return response;
  }

}


