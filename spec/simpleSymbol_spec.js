/**
 * For this challenge you will be determining whether or
 * not certain characters are in correct positions.
 */
describe('simpleSymbol', function() {
    'use strict';
    it(" Input = '+d+=3=+s+' Output = 'true' ", function() {
        var input = '+d+=3=+s+',
            output = true;
        expect(simpleSymbol(input)).toEqual(output);
    });
    it(" Input = 'f++d+' Output = 'false' ", function() {
        var input = 'f++d+',
            output = false;
        expect(simpleSymbol(input)).toEqual(output);
    });
});