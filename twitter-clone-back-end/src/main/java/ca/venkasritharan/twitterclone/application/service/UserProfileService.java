package ca.venkasritharan.twitterclone.application.service;

public class UserProfileService {
  //  private final UserRepository userRepository;
//  private final FollowerRepository followerRepository;
//  private final ModelMapper mapper;
//
//
//  public UserProfileServiceImpl(UserRepository userRepository, FollowerRepository followerRepository, ModelMapper mapper) {
//    this.userRepository = userRepository;
//    this.followerRepository = followerRepository;
//    this.mapper = mapper;
//  }
//
//  @Override
//  public List<UserDetailsResponse> getAllProfiles() {
//    Page<User> users = userRepository.findAll(Pageable.ofSize(10));
//    return users.stream()
//            .map(user -> mapper.map(user, UserDetailsResponse.class))
//            .collect(Collectors.toList());
//  }
//
//  @Override
//  public List<UserDetailsResponse> allUnfollowedProfiles(Principal principal) {
//    Optional<User> optionalUser = userRepository.findByUsername(principal.getName());
//
//    if (optionalUser.isPresent()) {
//
//    }
//    return null;
//
//  }
//
//
//
//
//
//  @Override
//  public ResponseEntity<Long> getFollowingCount(Principal principal) {
//
//    long followingCount = followerRepository.countFollowersByFollower_Username(principal.getName());
//    return ResponseEntity.ok(followingCount);
//  }
//
//  private String getPrincipalUsername() {
//    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//    return authentication.getName();
//  }
//
//
//  //  @Override
////  public List<UserDetailsResponse> getAllProfiles() {
////    List<User> users = userRepository.findAll();
////    List<UserDetailsResponse> userDetailsResponses = new ArrayList<>();
////
////    for (User user : users) {
////      UserDetailsResponse userDetailsResponse = mapper.map(user, UserDetailsResponse.class);
////      userDetailsResponses.add(userDetailsResponse);
////    }
////
////    return userDetailsResponses;
////  }
}
