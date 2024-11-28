// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

import java.util.*;
import java.util.stream.Collectors;

class Persist {
	public static int persistence(long n) {
    if(n < 10) return 0;
    
    String numStr;
    ArrayList<Integer> numbers;
    long sum;
    int count = 0;
    
    while (n >= 10) {
      numStr = Long.toString(n);
      numbers = new ArrayList<>(Arrays.stream(numStr.split(""))
                                            .map(Integer::parseInt)
                                            .collect(Collectors.toList()));
      sum = 1;
      
      for(int i = 0; i < numbers.size(); i++) {
        sum *= numbers.get(i);
      }
      
      n = sum;
      count++;
    }
    
    return count;
	}
}
