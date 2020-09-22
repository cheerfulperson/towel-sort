
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  let array = [];
  for(n in matrix){
    array = matrix[n]
    if(n % 2 != 0){
      array = array.reverse()
    }
    
    for(i in array){
      arr.push(array[i]);
    }
  }
  return arr;
}
