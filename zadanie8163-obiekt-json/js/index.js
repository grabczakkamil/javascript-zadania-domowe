'use strict';
var jsonPracownicy = {
    
     "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
}

console.log(jsonPracownicy);

var pracownicy = jsonPracownicy.pracownicy;

pracownicy.forEach(function(pracownik, index) {
                   
        
    console.log("index: " + index + "; pracownik: " + pracownik.firstName +" "+ pracownik.lastName);
                   
})