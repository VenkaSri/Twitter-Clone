package ca.venkasritharan.twitterclone.security;

import ca.venkasritharan.twitterclone.entity.user.User;
import ca.venkasritharan.twitterclone.repository.authentication.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

  private UserRepository userRepository;

  public CustomUserDetailsService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user =  userRepository.findByUsername(
            username)
            .orElseThrow(() ->
                    new UsernameNotFoundException("User not found with the given info: " + username));
    Set<GrantedAuthority> authorities =  user
            .getRoles()
            .stream()
            .map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toSet());

    return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
  }
}
