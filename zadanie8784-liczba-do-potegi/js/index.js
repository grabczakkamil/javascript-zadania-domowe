'use strict';
function potega(a, b) {
    
     var wynik = 1;
    
    if (b <= -1) {
        var y = 1;
        for (var i = -1; i >= b; i--)
        y *= a;
        wynik = 1/y;
    }
    
    else if (b >= 1) {
    
    
    for (var j=1; j<=b; j++) {
        
     wynik *= a;
    }
    }
    
    else if (b<1 && b>0) {
        wynik ="b musi być liczbą naturalną";
    }
    else if (b<0 && b>-1) {
        wynik ="b musi być liczbą naturalną";
    }
return wynik;
}


