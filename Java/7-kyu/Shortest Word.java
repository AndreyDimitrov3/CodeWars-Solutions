// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

import java.util.*;
public class Kata {
    public static int findShort(String s) {
      String[] words = s.split(" ");
      int sum = 0;
      
      for(int i = 0; i < words.length; i++) {
        if(words[i].length() > sum) {
          sum = words[i].length();
        }
      }
      
      for(int i = 0; i < words.length; i++) {
        if(words[i].length() < sum) {
          sum = words[i].length();
        }
      }

      return sum;
    }
}
