package ca.venkasritharan.twitterclone.controller;

import ca.venkasritharan.twitterclone.entity.Follower;
import ca.venkasritharan.twitterclone.repository.FollowerRepository;
import ca.venkasritharan.twitterclone.response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("/api/followers")
public class FollowerController {

  @Autowired
  private FollowerRepository followerRepository;

//  @GetMapping("/{followerUserId}")
//  public Response<Map<String, Object>> getFollowers(@PathVariable("followerUserId") long followerUserId) {
//    List<Follower> followers = followerRepository.findAllByFollower_Id(followerUserId);
//    Map<String, Object> responseData = new HashMap<>();
//    List<String> followInfoDTOList = new ArrayList<>();
//    for (Follower follwer: followers
//         ) {
//      followInfoDTOList.add(follwer.getFollowed().getUsername());
//      System.out.println(follwer.getFollowed().getUsername());
//    }
//    responseData.put("users", followInfoDTOList);
//    return new Response<>(200, responseData);
//  }
}
