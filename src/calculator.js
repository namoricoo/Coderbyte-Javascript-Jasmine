window.Calculator = {
  current: 0,

  add: function(inputArray) {
    var sum = this.current;
    var i;
    for(i = 0, len = arguments.length; i< len; i++) {
      sum += arguments[i];
    }
    this.current = sum;
    return this.current;
  },

  substract: function(inputNumber) {
    var result = this.current;
    var i;
    for(i = 0, len = arguments.length; i< len; i++) {
      result -= arguments[i];
    }
    this.current = result;
    return this.current;
  },
  reset: function() {
    this.current = 0;
  }
};