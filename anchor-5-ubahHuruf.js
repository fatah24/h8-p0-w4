function ubahHuruf(kata) {
    var tampung = ''
    var abjad = 'abcdefghijklmnopqrstuvwxyz'

    for(var i = 0; i < kata.length; i++){
        for( var j = 0; j < abjad.length; j++){
            if ( kata[i] === abjad[j]){
                tampung += abjad[j + 1] 


            }
        }
    }
    return tampung
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  