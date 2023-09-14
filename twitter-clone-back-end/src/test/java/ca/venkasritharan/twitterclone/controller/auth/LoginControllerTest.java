package ca.venkasritharan.twitterclone.controller.auth;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.hamcrest.Matchers.is;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc
public class LoginControllerTest {

  @Autowired
  private MockMvc mockMvc;


  @Test
  public void shouldReturn200WhenIdentifierExists() throws Exception {
    mockMvc.perform(post("/api/auth/exists")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("{\"identifier\":\"venk\"}"))
            .andExpect(status().isOk());
  }

  @Test
  public void shouldReturn404WhenIdentifierDoesNotExist() throws Exception {
    mockMvc.perform(post("/api/auth/exists")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("{\"identifier\":\"nonExistingIdentifier\"}"))
            .andExpect(status().isNotFound());
  }

  @Test
  public void shouldReturnCorrectResponseBodyWhenIdentifierExists() throws Exception {
    mockMvc.perform(post("/api/auth/exists")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("{\"identifier\":\"venk\"}"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.status", is(200)))
            .andExpect(jsonPath("$.data", is("User exists")));
  }

  @Test
  public void shouldReturn400ForInvalidJson() throws Exception {
    mockMvc.perform(post("/api/auth/exists")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content("{\"identifier\":}"))
            .andExpect(status().isBadRequest());
  }




}
