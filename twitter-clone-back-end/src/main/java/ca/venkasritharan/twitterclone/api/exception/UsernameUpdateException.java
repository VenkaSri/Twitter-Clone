package ca.venkasritharan.twitterclone.api.exception;

public class UsernameUpdateException extends RuntimeException{
  public UsernameUpdateException(String message, Throwable throwable) {
    super(message, throwable);
  }
}
