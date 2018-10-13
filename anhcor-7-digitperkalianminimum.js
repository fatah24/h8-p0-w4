function digitPerkalianMinimum(angka) {
  let result = []

  for(let i = 1; i <= angka; i++) {
    for(let j = 1; j <= angka; j++) {
      if(i * j === angka) {
        result.push(String(i) + String(j))
      }
    }
  }
  // console.log(result)

  let terkecil = result[0].length
  for(let k = 1; k < result.length; k++) {
    if(result[k].length < terkecil) {
      terkecil = result[k].length
      // console.log(terkecil)
    }
  }
  return terkecil
}

console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
