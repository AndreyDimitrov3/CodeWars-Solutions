// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  const lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const originalArr = message.split("");
  console.log(originalArr);
  let messageArr = message.toLowerCase().split("");

  for(let i = 0; i < messageArr.length; i++) {
    if (lowerCaseLetters.indexOf(messageArr[i]) === -1) {
      continue;
    }
    
    if(lowerCaseLetters.indexOf(messageArr[i]) < 13) {
      let lowerCaseLetter = lowerCaseLetters.indexOf(messageArr[i]) + 13;
      messageArr[i] = lowerCaseLetters[lowerCaseLetter];
    } else {
      let charachter = lowerCaseLetters.indexOf(messageArr[i]) + 13 - 26;
      messageArr[i] =  lowerCaseLetters[charachter];
    }
  }

  for(let i = 0; i < messageArr.length; i++) {
    let originalEl = false;
    if(originalArr[i] === originalArr[i].toUpperCase()) originalEl = true; 

    if(originalEl === true) {
      messageArr[i] = messageArr[i].toUpperCase();
    }
  }

  return messageArr.join("");
}
