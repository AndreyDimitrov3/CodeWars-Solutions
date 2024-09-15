// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
  str = str.trim();
  if(str === '') return false;
  let strArr = str.split(' ').filter(word => word !== '');

  for(let i = 0; i < strArr.length; i++){
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }  
  return ('#' + strArr.join('')).length > 140 ? false : '#' + strArr.join('');
}
