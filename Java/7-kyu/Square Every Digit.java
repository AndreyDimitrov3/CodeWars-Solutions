// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25).
// Note: The function accepts an integer and returns an integer.
// Happy Coding!

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SquareDigit {
  public int squareDigits(int n) {
    String nString = String.valueOf(n);
    List<String> nArr = new ArrayList<>(Arrays.asList(nString.split("")));

    for(int i = 0; i < nArr.size(); i++){
      int digit = Integer.parseInt(nArr.get(i));
      nArr.set(i, String.valueOf(digit * digit));  
    }
    
    String answer = String.join("", nArr);
    return Integer.parseInt(answer);
  }
}
