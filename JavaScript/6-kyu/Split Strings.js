// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let strArr = str.split('');
  let newArr = [];
  
  for(let i = 0; i < strArr.length; i++){
    if(i % 2 === 0){
      newArr.push(String(strArr[i] + strArr[i + 1]));
    }
  }
  
  if(strArr.length % 2 !== 0){
    let lastEl = newArr[newArr.length - 1].substring(0, 1);
    newArr[newArr.length - 1] = lastEl + '_';
  }
  
  return newArr;
}
