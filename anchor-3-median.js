function cariMedian(arr) {
  // you can only write your code here!
  
    var length = arr.length
    //console.log(length);
    
    var result = 0
    if( length %2 === 0){
      return result = ((arr[length / 2 - 1] + arr[length / 2]) /2)
    } else {
        return result = arr[(length-1) / 2]
    }
    //console.log(result);
    
}


// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
