#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Percentage",
      
    ],
  },
]);

// Conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else if (answer.operator === "Percentage") {
  let percent = (answer.firstNumber * answer.secondNumber) / 100;
  console.log(percent);

  const answerper = await inquirer.prompt([
    {
      name: "operator",
      type: "list",
      message: "Select one of the operator",
      choices: ["Deduct the percentage", "Add the percentage"],
    },
  ]);
  if (answerper.operator === "Deduct the percentage") {
    console.log((answer.firstNumber -= percent));
  } else if (answerper.operator === "Add the percentage") {
    console.log((answer.firstNumber += percent));
  }
} else {
  console.log("Please select valid operator");
}
