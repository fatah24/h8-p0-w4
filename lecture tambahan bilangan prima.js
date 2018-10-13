function isPrime(angka){
    var bilanganPrimaDasar = [2,3,5,7];

    for (var i = 0; i < bilanganPrimaDasar.length; i++){
        if(angka % bilanganPrimaDasar[i] === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(192190))