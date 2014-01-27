describe("firstReverse", function() {
     "use strict";
     it("reverses a string Input = 'coderbyte' Output = 'etybredoc' ", function() {
         var stringInput = 'coderbyte';
         var stringOutput = 'etybredoc';
         expect(firstReverse(stringInput)).toEqual(stringOutput);
     });
     it("reverses a string Input = 'coderbyte' Output = 'etybredoc' ", function() {
         var stringInput = 'I Love Code';
         var stringOutput = 'edoC evoL I';
         expect(firstReverse(stringInput)).toEqual(stringOutput);
     });
});
