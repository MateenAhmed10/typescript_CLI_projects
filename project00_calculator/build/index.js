"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
console.log("\n\t--------------- Promp-Sync Calculator ---------------\n");
let num1 = Number(prompt("Enter first number: "));
let operator = prompt("Enter the operator: ");
let num2 = Number(prompt("Enter second number: "));
const calculator = (num1, num2, operator) => {
    let result = 0;
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
