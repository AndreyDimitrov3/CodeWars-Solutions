// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

import java.util.*;

public class DuplicateEncoder {
	static String encode(String word){
    ArrayList<String> wordArr = new ArrayList<>(Arrays.asList(word.toLowerCase().split("")));
    String[] answer = new String[wordArr.size()];
    
    for(int  i = 0; i < wordArr.size(); i++) {
      for(int j = 0; j < wordArr.size(); j++) {
        if(wordArr.get(i).equals(wordArr.get(j)) && i != j) {
          answer[i] = ")";
          break;
        } else {
          answer[i] = "(";
        }
      }
    }
    
    return String.join("", answer);
  }
}
