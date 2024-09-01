function persistence(num) {
   if(num < 10){
     return 0;
   }
  
  let attempts = 0;
  let length = Array.from(String(num), Number)

  while (num >= 10){
    let sum = 1;
    let newArr = Array.from(String(num), Number);
    
    for(let i = 0; i < newArr.length; i++){
      sum *= newArr[i]
    }
    
    num = sum;
    attempts += 1; 
  }
  return attempts;
}
