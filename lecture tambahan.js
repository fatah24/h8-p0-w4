var nama = 'Irsyah Mardiah'

var nama2 = ''
for( var i = 0; i < nama.length; i++){
    nama2 = nama[i]
    //console.log(nama2) //nama full di pring ke bawah
    if(i %2 !== 0){
        nama2 = nama[i]
    console.log(nama2); //nama di print kebawah dg kondisi [i] ganjil saja
      
    }

}

for( var i = nama.length-1; i >= 0; i--){
    if(i %2 ===0){
        nama2 = nama[i]
        console.log(nama2);//nama2 di print ke bawah dengan kondisi [i] genap
        
    }
}


//1.cara meng akses string dengan cara 
//nama variabel[indeks]