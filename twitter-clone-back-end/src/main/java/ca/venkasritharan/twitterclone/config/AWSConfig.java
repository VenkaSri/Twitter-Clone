package ca.venkasritharan.twitterclone.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
public class AWSConfig {

// https://www.baeldung.com/java-aws-s3

  @Bean
  public S3Client s3() {
    return S3Client.builder()
            .region(Region.US_EAST_1)
            .build();
  }
}
