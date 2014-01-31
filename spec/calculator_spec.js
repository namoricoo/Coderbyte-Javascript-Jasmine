describe("Calculator", function() {
  it("should store the current value at all times", function() {
    expect(Calculator.current).toBeDefined();

    expect(Calculator.current).toEqual(0);
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
});