// Complete the square sum function so that it squares each number passed into it and then sums the results together.
  
import java.util.*;

public class Kata {
  public static int squareSum(int[] n) { 
    int sum = 0;
    for(int i = 0; i < n.length; i++) {
      sum += Math.pow(n[i], 2);
    }
    return sum;
  }
 }
