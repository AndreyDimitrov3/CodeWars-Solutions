function tribonacci(signature,n){
  if(n <= 0){
    return [];
  } else{
    let newNumber = 0;
    let x1 = signature[0];
    let x2 = signature[1];
    let x3 = signature[2];
    let newArr = [x1, x2 , x3];
    
    if(n < 3){
      if(n === 2) return newArr = [x1, x2];
      else if(n === 1) return newArr = [x1];
    }
    
    for(let i = 0; i < n - 3; i++){
      newNumber = x1 + x2 + x3;
      newArr.push(newNumber);
      
      x1 = x2;
      x2 = x3;
      x3 = newNumber;;
    }
    return newArr;
  }
}
