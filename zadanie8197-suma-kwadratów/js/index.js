function sumaKwadratow() {
    'use strict';
    var tablica = [0,1,2,3,4,5];
    var suma = 0;
    for (var i=0; i<=5; i++) {
        suma += Math.pow(tablica[i], 2);
    }
    return suma;
//    console.log (suma);
}

sumaKwadratow();

console.log(sumaKwadratow(0,1,2,3,4,5));