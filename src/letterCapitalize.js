function capitalize (oneWord) {
    return oneWord.charAt(0).toUpperCase() + oneWord.slice(1).toLowerCase();
}

var letterCapitalize = function(inputString) {
        'use strict';
        var outputString ='',
            index = 0,
            inputArray = inputString.split(' ');
        inputArray.forEach( function(oneWord) {
            outputString += capitalize (oneWord);
            index += 1;
            if (index < inputArray.length) {
                 outputString += ' ';
            }               
            
        });
        return outputString;
    };