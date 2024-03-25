#!/usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([{
        name: "Number",
        type: "number",
        message: "Guess the number",
    }]);
if (answer.Number === randomNumber) {
    console.log("Congratulations! you won the game");
}
else {
    console.log("Sorry! your guess is wrong");
}
