'use strict';

function sumaIloczyn(tablica) {
    
    var suma = 0;
    var iloczyn = 1;
    for (var i=0; i<tablica.length; i++) {
        suma += tablica[i];
        iloczyn *= tablica[i];
    }
    console.log(suma);
    console.log(iloczyn);
}
sumaIloczyn([1, 2, 3, 4, 5, 6]);