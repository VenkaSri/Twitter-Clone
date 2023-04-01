package ca.venkasritharan.twitterclone.service.impl;

import ca.venkasritharan.twitterclone.service.TrendService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class TrendServiceImpl implements TrendService {

  WebClient.Builder builder = WebClient.builder();

  String url =  "https://api.twitter.com/1.1/trends/place.json?id=1";
//  String url =  "https://catfact.ninja/fact";


//            .headers(h -> h.setBearerAuth("AAAAAAAAAAAAAAAAAAAAAFghZwEAAAAA37hvcMClIpAI4HeUUrq09YkX%2FIQ%3DrGME7H2ag2vALDQsQiZNzo335gO5yYdADMJr2GJC26lscusFPX"))


  @Override
  public void getCurrentTrends() {
    String carFact = builder.build()
            .get()
            .uri(url)
            .headers(h -> h.setBearerAuth("AAAAAAAAAAAAAAAAAAAAAFghZwEAAAAA37hvcMClIpAI4HeUUrq09YkX%2FIQ%3DrGME7H2ag2vALDQsQiZNzo335gO5yYdADMJr2GJC26lscusFPX"))
            .retrieve()
            .bodyToMono(String.class)
            .block();



    ObjectMapper mapper =new ObjectMapper();



    try {
      JsonNode jsonNode = mapper.readTree(carFact);
      System.out.println(jsonNode.get(0).get("trends"));
    } catch (JsonMappingException e) {
      e.printStackTrace();
    } catch (JsonProcessingException e) {
      e.printStackTrace();
    }




  }
}
