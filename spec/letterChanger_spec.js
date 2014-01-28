/**
 * Using the Ruby language, have the function LetterChanges(str) take
the str parameter being passed and modify it using the following algorithm
Replace every letter in the string with the letter following it in the
alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel
in this new string (a, e, i, o, u) and finally return this modified string
*
*/
describe('letterChanger', function() {
    'use strict';
    it("gets next letter in alpabet Input = 'a' Output = 'b'", function() {
        var input = 'a',
            output = 'b';
        expect(letterChanger(input)).toEqual(output);
    });
    it("gets next letter in alpabet Input = 'hello*3' Output = 'Ifmmp*3'", function() {
        var input = 'hello*3',
            output = 'Ifmmp*3';
        expect(letterChanger(input)).toEqual(output);
    });
    it("gets next letter in alpabet Input = 'zab' Output = 'Abc'", function() {
        var input = 'zab',
            output = 'Abc';
        expect(letterChanger(input)).toEqual(output);
    });
});
