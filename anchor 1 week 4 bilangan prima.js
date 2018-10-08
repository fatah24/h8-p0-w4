

function angkaPrima(angka) {
  // you can only write your code here!


var prima = true;

if (angka === 1){
return false // angka 1 bukanlah angka prima

}if (angka === 2){
return true // angka 2 adalah angka prima
}else
    for (i = 2; i < angka -1; i++){
      if (angka % i === 0){
        prima = false
      }
    }

      
      
return prima
} 

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false