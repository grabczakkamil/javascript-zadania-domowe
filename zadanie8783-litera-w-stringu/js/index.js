'use strict';

function policzLitery(a,b) {
    var inscription = a;
    var arr = inscription.split('');
    var wynik = 0;
    
    if (b == b.toUpperCase()) {
        var y = b.toLowerCase();
    }
    else {
        var y = b.toUpperCase();
    }
    for (var i = 0; i <= arr.length; i++) {
        var x = arr[i];
        if (x == b || x == y) {
            wynik += 1
        }
    }
  return wynik; 
}

console.log(policzLitery("Szkoła Programowania Akademia 108", "a"));
