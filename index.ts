#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to Abdul Rauf - CLI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your Guess Number(Number Limit from 1 to 5):",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulagion ! You guess a correct Number.");
}
else{
    console.log("Sorry, you guess a wrong Number.");
}