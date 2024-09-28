import java.util.ArrayList;

public class Solution {
  public int solution(int number) {
    ArrayList<Integer> numbersArr = new ArrayList<>();
    
    for(int i = number - 1; i > 0; --i) {
        if(i % 3 == 0 || i % 5 == 0) {
          numbersArr.add(i);
        }
    }
    int sum = numbersArr.stream().reduce(0, (a, b) -> a + b);
    return sum;
  }
}
