function fpb(angka1, angka2) {
   
  var result = []
  var result1 = []

  for ( var i = 1; i <= angka1; i++){
    if (angka1 % i === 0) {
      result.push(i)
    
    }    
  }
  //console.log(result);
  
  for ( var j = 1; j <= angka2; j++){
    if (angka2 % j === 0) {
      result1.push(j)
        
    } 
  }
  // console.log(result.length);

  for (var k = result.length-1; k >= 0; k-- ){
    //console.log('konsol 1 = ' + k)
    for( var l = result1.length-1; l >= 0; l--){
      //console.log(l)
      if(result[k] === result1[l]){
        return result1[l]
      }
    }
  } 
}  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
  