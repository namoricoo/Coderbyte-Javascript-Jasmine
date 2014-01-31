describe("Calculator", function() {
  beforeEach(function() {
    Calculator.current = 0;
  });

  it("should store the current value at all times", function() {
    expect(Calculator.current).toBeDefined();    
  });

  it("current should have initial value of zero '0' ", function() {
    expect(Calculator.current).toEqual(0);
  });

  it("should add numbers", function() {
    var input = 5,
        output = 5;
    expect(Calculator.add(input)).toEqual(output);
    // See what happens if we add a second number
    output = 10;
    expect(Calculator.add(input)).toEqual(output);
  });
  it("should add any number of numbers", function() {
      var output = 6;
      expect(Calculator.add(1,2,3)).toEqual(output);
  });
});