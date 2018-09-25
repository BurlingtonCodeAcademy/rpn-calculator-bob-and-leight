class Calculator {
  constructor() {
    this.stack = [];
  }
  checkEmpty() {if (this.stack.length === 0) {
    throw 'calculator is empty'
  }
}
  value() {
    if (this.stack.length === 0) {
      return 0;
    }
    return this.stack[this.stack.length-1];
  }

  enter(value) {
    this.stack.push(value);
  }

  plus() {
    this.checkEmpty();
    this.stack.push(this.stack.pop() + this.stack.pop());
  }

  minus() {
    this.checkEmpty();
    let last = this.stack.pop();
    let penult = this.stack.pop() || 0;
    this.stack.push(penult - last);
  }

  divide() {
    this.checkEmpty();
    let last = this.stack.pop();
    let penult = this.stack.pop();
    this.stack.push(penult / last);
  }

  times() {
    this.checkEmpty();
    let last = this.stack.pop();
    let penult = this.stack.pop();
    this.stack.push(penult * last);
  }
}
module.exports = Calculator;

myCalc = new Calculator()
myCalc.enter(2);
myCalc.enter(5);
myCalc.plus();
myCalc.enter(7);
myCalc.divide();
console.log(myCalc.value());