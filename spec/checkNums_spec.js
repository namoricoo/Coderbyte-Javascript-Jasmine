// Using the Ruby language, have the function CheckNums(num1,num2) take
// both parameters being passed and return the string true if num2 is
// greater than num1, otherwise return the string false. If the parameter
// values are equal to each other then return the string -1.
describe('checkNums', function() {
    'use strict';
    it("second less than first, num1 = 3 & num2 = 122 Output = 'true'", function() {
        var num1 = 3,
            num2 = 122,
            output  = 'true';
        expect(checkNums(num1, num2)).toEqual(output);
    });
    it("second less than first, num1 = 67 & num2 = 67 Output = '-1'", function() {
        var num1 = 67,
            num2 = 67,
            output  = '-1';
        expect(checkNums(num1, num2)).toEqual(output);
    });
});