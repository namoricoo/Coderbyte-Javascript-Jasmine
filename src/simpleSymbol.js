function plusCharPlusPattern(inputString, index) {
var previousChar = 	inputString[index - 1],
    currentChar = inputString[index],
    nextChar = inputString[index + 1],
    patternString = previousChar + currentChar + nextChar;
    return (/^[+][A-z][+]/.test(patternString));
}

var simpleSymbol = function(inputString) {
        'use strict';
        var nextCharacter = '',
            currentCharacter = '',
            output = false,
            index;
        for (index = 0; index < inputString.length; index += 1) {
            currentCharacter = inputString[index];
            if (/^[A-z]+$/.test(currentCharacter)) {
              if (plusCharPlusPattern(inputString, index)) {
              	output = true;
              }
              else return false;
            }            
        }
        return output;
    };
