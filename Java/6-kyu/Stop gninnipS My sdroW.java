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
