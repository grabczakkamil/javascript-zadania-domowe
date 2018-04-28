function elementCiagu(n) {
    'use strict';
    if (n === 0)
    return 0;

    else if (n === 1)
    return 1;
    
    else if (n > 1) {
    return elementCiagu(n - 1) + elementCiagu(n - 2);
    }
}
elementCiagu();
console.log(elementCiagu(2));


/*przykład z zajęć*/
function fibonacci(index) {
    if (index === 0) {
        console.log(0);
        return;
    }
    if (index === 1) || index === 2 {
        console.log(1);
        return;
    }
    var currentValue = 1;
    var previousValue = 1;
    for (var i = 2; i<index; i++ ) {
        var tempCurrentValue;
        var currentValue = currentValue + previousValue;
        var previousValue = tempCurrentValue;
    }
    console.log(currentValue);
}