describe("Calculator", function() {
  it("should add numbers", function() {
    var input = 5,
        output = 5;
    expect(Calculator.add(input)).toEqual(output);
    // See what happens if we add a second number
        output = 10;
    expect(Calculator.add(input)).toEqual(output);
  });
});