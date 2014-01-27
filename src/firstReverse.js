var firstReverse = function(stringInput) {
        "use strict";
        var characterArray = stringInput.split(''),
            outputString = '',
            index;
        for (index = characterArray.length - 1; index > -1; index -= 1) {
            outputString += characterArray[index];
        }
        return outputString;
    };