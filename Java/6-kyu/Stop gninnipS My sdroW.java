// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples:
// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class SpinWords {
  public String spinWords(String sentence) {
    List<String> sentenceArr = new ArrayList<>(Arrays.asList(sentence.split(" ")));
    
    for(int i = 0; i < sentenceArr.size(); i++) {
      if(sentenceArr.get(i).length() >= 5) {
        sentenceArr.set(i, new StringBuilder(sentenceArr.get(i)).reverse().toString());
      }
    }
    
    String answer = String.join(" ", sentenceArr);
    return answer;
  }
}
