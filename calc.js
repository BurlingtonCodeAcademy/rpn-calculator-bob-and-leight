const Calculator = require('./calculator.js')

const readline = require('readline');
const readlineInterface = readline.createInterface(
  { input: process.stdin, output: process.stdout }
);

const ask = questionText => new Promise((resolve, reject) => {
  readlineInterface.question(questionText, resolve);
});

const runCalc = async () => {
  while (true) {
    let value = await ask(`[${myCalc.stack}]\n`);
    if (value === '+') {
      myCalc.plus();
    } else if (value === '-') {
      myCalc.minus();
    } else if (value === '*') {
      myCalc.times();
    } else if (value === '/') {
      myCalc.divide();
    } else if (+value) {
      myCalc.enter(+value);
    } else {
      throw 'Invalid character';
    }
  }
}

myCalc = new Calculator();

runCalc();

