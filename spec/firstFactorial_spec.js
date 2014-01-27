// Using the Ruby language, have the function FirstReverse(str) take the str
// parameter being passed and return the string in reversed order.
describe('firstFactorial', function() {
    'use strict';
    it("returns the factorial input='4' ouput='24'", function() {
        var inputNumber = 4,
            outputNumber = 24;
        expect(firstFactorial(inputNumber)).toEqual(outputNumber);
    });
});