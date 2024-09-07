function isValidWalk(walk) {
  if(walk.length === 10){
    let ns = 0;
    let we = 0;
    for(let i = 0; i < walk.length; i++){
      if(walk[i] === 'n') ns += 1;
      else if(walk[i] === 's') ns -= 1;
      else if(walk[i] === 'w') we += 1;
      else if(walk[i] === 'e') we -= 1;      
    }
    if(ns === 0 && we === 0){
      return true;
    } else{
      return false;
    }
  } else{
    return false;
  }
}
