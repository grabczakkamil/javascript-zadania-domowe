'use strict';

function sumaKwadratow(tablica) {
    
    var suma = 0;
    for (var i=0; i<tablica.length; i++) {
        suma += Math.pow(tablica[i], 2);
    }
    return suma;

}


console.log(sumaKwadratow([0,1,2,3,4,5]));