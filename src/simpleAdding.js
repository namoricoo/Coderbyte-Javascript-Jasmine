var simpleAdding = function(upperIntLimit) {
        'use strict';
        var total = 0,
            index;
        if(isDigit(upperIntLimit)) {
          for(index = 0; index <= upperIntLimit; index += 1) {
            total += index;
          }
        }
        else {
          return 'error';
        }
        return total;
    };
function isDigit(input)
{
  return /^\d+$/.test(input);
}  