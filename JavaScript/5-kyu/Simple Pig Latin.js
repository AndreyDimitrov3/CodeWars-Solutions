// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  let strArr = str.split(' ');
  let newArr = [];
  
  for(let i = 0; i < strArr.length; i++){
    if (strArr[i] !== '!' && strArr[i] !== '?') {
      let removeEl = strArr[i][0];
      newArr.push(strArr[i].substring(1, strArr[i].length) + removeEl + 'ay');
    } else {
      newArr.push(strArr[i]);
    }
  }
  
  return newArr.join(' ');
}
