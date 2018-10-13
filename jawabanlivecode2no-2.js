/*
==================================
Array Mastery: Second Largest
==================================
Nama:________
[INSTRUKSI]
Function secondLargest akan menerima satu parameter berupa array yang berisikan angka, dimana dengan asumsi kemungkinan angka dari 0 - 999, dan angka dalam array minimal 3 angka, dan tidak ada angka yang bernilai sama (ini adalah info tese case, bukan harus divalidasi/dicek).
secondLargest akan mengembalikan angka yang kedua terbesar dari array tersebut.
[CONTOH]
input: [4, 2, 5, 1]
output: 4

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!
- Dilarang menggunakan .sort!
*/

//algoritma
//1. start
//2. jalankan looping fuction (number) 1-999 /number.length
//3. jika sudah terisi var tampung maka return result length-2/ atau yang ke2 dari belakang
//4. display var seconlagerst



function secondLargest(numbers) {
  // // Code here
  // var tampung =0;
  // for (var i=0; i< numbers.length; i++){
  //   for (var j=0; j< numbers.length-i-1; j++){
  //     if (numbers[j] > numbers [j+1]){
  //       tampung = numbers[j];
  //       numbers[j] =  numbers[j+1];
  //       numbers[j+1] = tampung;
  //     }
  //   }
  // }
  // //console.log(numbers[numbers.length-1]);
  // return numbers[numbers.length-2];
var max = numbers[0];
var secondMax = -1;


for (var i = 1; i < numbers.length; i++){
	if(max < numbers[i]){
		max = numbers[i];
	}

}
for(var i =0; i < numbers.length; i++){
	if(numbers[i] < max){
		if(secondMax < numbers[i]){
			secondMax = numbers[i];
		}
	}
}



return secondMax;
}





// TEST CASES
console.log(secondLargest([5, 2, 1, 4])); // 4
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313