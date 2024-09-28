// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

public class Vowels {
  public static int getCount(String str) {
    String[] strArr = str.split("");
    String[] vowels = {"a", "e", "i", "o", "u"};
    int count = 0;
    
    for(int i = 0; i < strArr.length; i++) {
      for(int j = 0; j < vowels.length; j++) {
        if(strArr[i].equals(vowels[j])) {
          count += 1;
          break;
        }
      }
    }
    return count;
  }
}
