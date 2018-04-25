'use strict';

function porownanie(tablica) {

    for (var index = 0; index < tablica.length -1; index++) {

        for (var i = 0; i < tablica.length - 1; i++) {

            if (tablica[i] > tablica[i+1]) {
                
                [tablica[i],tablica[i+1]]=[tablica[i+1], tablica[i]];
                
            }
        }
    }
    return tablica;
}
var tablica = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

console.log(porownanie(tablica));