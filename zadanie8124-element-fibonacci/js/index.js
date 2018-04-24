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

console.log(elementCiagu(9));