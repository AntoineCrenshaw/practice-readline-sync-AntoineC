import readline from 'readline-sync';

let name = readline.question("What is your name? ");

console.log("Hello, " + name + "!");

let plusSignOperation = readline.question("If you want to join two strings together, what operation would you use? ");

console.log("The operation you would use is:" + plusSignOperation);

let dataTypeQuestion = readline.question("What datatype would a function with the value of `25` return? ");
console.log(dataTypeQuestion);

let truthyOrFalsy = readline.question("What datatype returns truthy or falsy? ");
console.log(truthyOrFalsy);

let mathProblem = readline.question("What does `5` + 2 return? ");
console.log(mathProblem);