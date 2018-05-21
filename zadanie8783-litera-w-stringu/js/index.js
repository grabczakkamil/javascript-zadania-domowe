'use strict';

function policzLitery(a,b) {
    var inscription = a;
    var arr = inscription.split('');
    var wynik = 0;
    
    for (var i = 0; i <= arr.length; i++) {
        var x = arr[i];
        if (x === b) {
            wynik += 1
        }
    }
  return wynik; 
}

console.log(policzLitery("Szkoła Programowania Akademia 108", "a"));