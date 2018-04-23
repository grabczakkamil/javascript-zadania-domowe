function sumaIloczyn() {
    'use strict';
    var tablica = [1, 2, 3, 4, 5, 6];
    var suma = 0;
    var iloczyn = 1;
    for (var i=0; i<=5; i++) {
        suma += tablica[i];
        iloczyn *= tablica[i];
    }
    console.log(suma);
    console.log(iloczyn);
}
sumaIloczyn();