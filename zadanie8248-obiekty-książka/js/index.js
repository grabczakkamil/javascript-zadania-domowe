'use strict';
class Ksiazka {
    
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
        
    }
    opiszKsiazke() {

    this.przeczytana === true;

    if (this.przeczytana) {
        console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została przeczytana");
    } else {
        console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i nie została przeczytana");
    }
//        console.log("Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została " + this.przeczytana);
        
    }
}

//         var przeczytana;
//    przeczytana = true;
//
//    if (przeczytana) {
//        console.log("przeczytana");
//    } else {
//        console.log("nieprzeczytana");
//    }

var ziemiaObiecana = new Ksiazka("Ziemia Obiecana", "Władysław Reymont", false);
var krzyzacy = new Ksiazka("Krzyżacy", "Henryk Sienkiewicz", false);
var panTadeusz = new Ksiazka("Pan Tadeusz", "Adam Mickiewcz", true);


console.log(ziemiaObiecana);
console.log(krzyzacy);
console.log(krzyzacy.opiszKsiazke());
console.log(ziemiaObiecana.opiszKsiazke());

