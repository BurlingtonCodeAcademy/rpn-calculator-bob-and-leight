const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};

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

async function userInput(){
  let userIn = await ask('Enter a number or operator.')
  if (userIn.isNan == false) {
    myCalc.enter(parseInt(userIn))
    let cont = await ask('add more numbers or operators Y/N?')
    if (cont.toLowerCase() === 'y') {
      userInput();
    }
    else if (cont.toLowerCase() === 'n') {
      console.log('The result is: ' + myCalc.value());
      process.exit()
    }
  }
  else if (userIn === '+') {
    myCalc.plus();
    cont;
    if (cont.toLowerCase() === 'y') {
      userInput();
    }
    else if (cont.toLowerCase() === 'n') {
      console.log('The result is: ' + myCalc.value());
      process.exit()
    }
  }
  else if (userIn === '-') {
    myCalc.minus();
    cont;
    if (cont.toLowerCase() === 'y') {
      userInput();
    }
    else if (cont.toLowerCase() === 'n') {
      console.log('The result is: ' + myCalc.value());
      process.exit()
    }
  }
  else if (userIn === '/') {
    myCalc.divide();
    cont;
    if (cont.toLowerCase() === 'y') {
      userInput();
    }
    else if (cont.toLowerCase() === 'n') {
      console.log('The result is: ' + myCalc.value());
      process.exit()
    }
  }
  else if (userIn === '*') {
    myCalc.times();
    cont;
  }
  else {
    console.log('invalid input');
    userInput();
    cont;
    if (cont.toLowerCase() === 'y') {
      userInput();
    }
    else if (cont.toLowerCase() === 'n') {
      console.log('The result is: ' + myCalc.value());
      process.exit()
    }
  }
};

userInput();