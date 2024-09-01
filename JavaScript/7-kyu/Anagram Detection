var isAnagram = function(test, original) {
  let testArr = test.toLowerCase().split('').sort();
  let originalArr = original.toLowerCase().split('').sort();

  if(testArr.length > originalArr.length || originalArr.length > testArr.length){
    return false;
  } else{
    for(let i = 0; i < testArr.length; i++){
      if(testArr[i] !== originalArr[i]){
        return false;
      }
    }
    return true;
  }
};
