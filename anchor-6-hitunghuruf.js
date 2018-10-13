
function hitungHuruf(kata) {
    let arr = kata.split(' ')
    let object = {};
  
    for(let i = 0; i < arr.length; i++) {
      if(object[arr[i]] === undefined) {
        object[arr[i]] = 0
      }
    }
    for(let j = 0; j < arr.length; j++) {
      let newObject = {}
        for(let k = 0; k < arr[j].length; k++) {
          if(newObject[arr[j][k]] === undefined) {
            newObject[arr[j][k]] = 1
          } else {
            newObject[arr[j][k]] += 1
          }
        }
  
        let scoreKata = 0;
  
        for (let key in newObject) {
          if (newObject[key] > 1) {
            scoreKata += newObject[key]
          }
        }
        object[arr[j]] = scoreKata
      }
    let word
    let scoreWord = 0
  
    for (let x in object) {
      if(object[x] > scoreWord) {
        word = x
        scoreWord = object[x]
      }
    }
    return word
  }
    
    // TEST CASES
    console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
    console.log(hitungHuruf('I am a passionate developer')); // passionate
    console.log(hitungHuruf('aku adalah anak gembala')); // adalah
    console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
    console.log(hitungHuruf('mengayuh perahu di danau')); // danau