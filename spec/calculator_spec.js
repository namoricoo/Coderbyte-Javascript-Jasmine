describe("Calculator", function() {
  it("should add numbers", function() {
    var input = 5,
        output = 5;
    expect(Calculator.add(input)).toEqual(output);
  });
});