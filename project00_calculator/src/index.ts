import promptSync from "prompt-sync";

const prompt = promptSync();

console.log("\n\t--------------- Promp-Sync Calculator ---------------\n")

let num1: number = Number(prompt("Enter first number: "));
let operator: string = prompt("Enter the operator: ");
let num2: number = Number(prompt("Enter second number: "));

const calculator = (num1: number, num2: number, operator: string) => {
  let result: number = 0;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result;
      break;
  }
  return result;
};

let ans = calculator(num1, num2, operator);
console.log("\nCalculated Answers is: ", ans);
