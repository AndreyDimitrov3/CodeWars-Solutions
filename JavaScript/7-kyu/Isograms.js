// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
  let word = str.toLowerCase().split("");
  
  for(let i = 0; i < word.length; i++) {
    for(let j = i + 1; j < word.length; j++) {
      if(word[i] === word[j]) {
        return false;
      } 
    }
  }
  return true;
}
