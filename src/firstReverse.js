var firstReverse = function(stringInput) {
        "use strict";
        var resultString = '',
            size = stringInput.length,
            index;
        for (index = 0; index < size + 1; index += 1) {
            resultString += stringInput.charAt(size - index);
        }
        return resultString;
    };