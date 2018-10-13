
function cariModus(arr) {
  let object = {};

  for(let i = 0; i < arr.length; i++) {
    if(object[arr[i]] === undefined) {
      object[arr[i]] = 1
    } else {
      object[arr[i]] += 1
    }
  }
  // console.log(object)

  let yangMunculPalingBanyak 
  let jumlahKemunculan = 0
  for(let x in object){
    // console.log('-' + x)
    if(object[x] > jumlahKemunculan) {
      yangMunculPalingBanyak = x
      jumlahKemunculan = object[x]
    } 
  }
  if(jumlahKemunculan === 1) {
    return -1
  } else if(jumlahKemunculan === arr.length) {
    return -1
  } else {
    return yangMunculPalingBanyak
  }
}


// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
