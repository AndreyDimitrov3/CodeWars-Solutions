function findUniq(arr) {
  let arrSort = arr.sort();
  if(arrSort[0] === arrSort[1]){
    return arr[arr.length - 1];
  }
  return arrSort[0];
}
