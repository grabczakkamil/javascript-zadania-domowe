'use strict';

function odwroconyString(napis) {
    var podzielonyNapis = napis.split("");
    var odwroconyNapis = podzielonyNapis.reverse();
    var polaczonyNapis = odwroconyNapis.join("");
    console.log(polaczonyNapis);

}
odwroconyString("Akademia108");

