var firstReverse = function(stringInput) {
        "use strict";
        var resultString = '',
            size = stringInput.length,
            index;
        for (index = 0; index < size; index += 1) {
            resultString += stringInput.charAt(size - index);
        }
        resultString += stringInput.charAt(0);
        return resultString;
    };