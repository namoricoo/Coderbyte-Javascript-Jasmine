var firstFactorial = function(inputNumber) {
        'use strict';
        var outputNumber = 1;
        while (inputNumber > 0) {
            outputNumber *= inputNumber;
            inputNumber -= 1;
        }
        return outputNumber;
    };
