const Calculator = require('./calculator.js').default

// See http://en.wikipedia.org/wiki/Reverse_Polish_notation

describe("Calculator", function () {

  var calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  it("initially has 0", function () {
    expect(calculator.value()).toEqual(0);
  });

  it("can add a number", function () {
    calculator.enter(2);
    expect(calculator.value()).toEqual(2);
  });

  it("can add two numbers", function () {
    calculator.enter(2);
    calculator.enter(3);
    calculator.plus();
    expect(calculator.value()).toEqual(5);
  });

  it("can add many numbers", function () {
    calculator.enter(2);
    calculator.enter(3);
    calculator.enter(4);
    calculator.plus();
    expect(calculator.value()).toEqual(7);
    calculator.plus();
    expect(calculator.value()).toEqual(9);
  });

  it("can subtract one number from another", function () {
    calculator.enter(3);
    calculator.enter(2);
    calculator.minus();
    expect(calculator.value()).toEqual(1);
  });

  it("can subtract a single number from nothing", function () {
    calculator.enter(2);
    calculator.minus();
    expect(calculator.value()).toEqual(-2);
  });

  it("adds and subtracts in sequence", function () {
    calculator.enter(2);
    calculator.enter(3);
    calculator.enter(4);
    calculator.minus();
    expect(calculator.value()).toEqual(-1);
    calculator.plus();
    expect(calculator.value()).toEqual(1);
  });

  it("multiplies and divides", function () {
    calculator.enter(2);
    calculator.enter(3);
    calculator.enter(4);
    calculator.divide();
    expect(calculator.value()).toEqual(0.75);
    calculator.times();
    expect(calculator.value()).toEqual(1.5);
  });

  it("fails informatively when there's not enough values stashed away", function () {
    expect(function () {
      calculator.plus();
    }).toThrow("calculator is empty");

    expect(function () {
      calculator.minus();
    }).toThrow("calculator is empty");

    expect(function () {
      calculator.times();
    }).toThrow("calculator is empty");

    expect(function () {
      calculator.divide();
    }).toThrow("calculator is empty");
  });

});
