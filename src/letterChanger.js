function alphabetKeyIntValue() {
    'use strict';
    return {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        l: 12,
        m: 13,
        n: 14,
        o: 15,
        p: 16,
        q: 17,
        r: 18,
        s: 19,
        t: 20,
        u: 21,
        v: 22,
        w: 23,
        x: 24,
        y: 25,
        z: 26
    };
}

function nextCharacter(character,alphabetObject) {
	var key = '',
	    nextCharInt;
	var array = Object.keys(alphabetObject);	
	var index = array.indexOf(character);	
	
	if (index == 25) {
			 return 'a';
	}
	else {
		nextCharInt = index + 1;		
		key = array[nextCharInt];		
		return key;
	}	
}

function getNextCharacter(character) {
   alphabetObject = alphabetKeyIntValue();
   if (/^[A-z]+$/.test(character) ) {
   	return nextCharacter(character,alphabetObject);
   }
   else{
   	return character;
   }
}

function upcaseVowels(character) {
	if (/[^aeiou]/.test(character) ) {
	 return character;
	}
	else
	{
	  return character.toUpperCase();
	}
}

var letterChanger = function(inputString) {
        'use strict';
        var index,
            outputString = '';
        for (index = 0; index < inputString.length; index += 1) {
         var temptString = getNextCharacter(inputString[index]);
         outputString += upcaseVowels(temptString);            
        }
        return outputString;
    }; 
