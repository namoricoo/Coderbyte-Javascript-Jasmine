window.Calculator = {
  current: 0,
  add: function(inputFloat) {
    this.current += inputFloat;
    return this.current;
  }
};