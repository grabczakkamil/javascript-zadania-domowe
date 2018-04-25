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
        return "Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i została przeczytana";
    } else {
        return "Książka ma tytuł " + this.tytul + " autorem jest " + this.autor + " i nie została przeczytana";
    }
    }
}


var ziemiaObiecana = new Ksiazka("Ziemia Obiecana", "Władysław Reymont", false);
var krzyzacy = new Ksiazka("Krzyżacy", "Henryk Sienkiewicz", false);
var panTadeusz = new Ksiazka("Pan Tadeusz", "Adam Mickiewcz", true);


var tablica = [];

tablica.push(krzyzacy, ziemiaObiecana, panTadeusz);

function iloscPrzeczytanych(tablica) {
    
    var iloscPrzeczytanych = 0;
    
    for (var i = 0; i <= 2; i++) {
        if (tablica[i].przeczytana === true) {
            iloscPrzeczytanych += 1;
            
        }
        console.log(tablica[i].opiszKsiazke());
    }
    return iloscPrzeczytanych;
}

console.log(iloscPrzeczytanych(tablica));

