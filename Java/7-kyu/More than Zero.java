// Correct this code so that it takes one argument, x, and returns "x is more than zero" if x is positive (and nonzero), and otherwise, returns "x is equal to or less than zero." In both cases, replace x with the actual value of x.

public class MoreThanZero {
  public static String corrections(int x) {
    if(x > 0) {
      return ((int)x + " is more than zero.");
    } else {
      return ((int)x + " is equal to or less than zero.");
    }
  }
}
