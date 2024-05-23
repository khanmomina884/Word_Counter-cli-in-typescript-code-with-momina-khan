#! /usr/bin/env node

//importing inquirer and chalk packeges

import inquirer from "inquirer";
import chalk from "chalk";

//display acolorful welcome message 

console.log(chalk. bold.bgMagenta(' \n \t \t Code With Momina - Word Counter \n'));
console.log("=".repeat(60));

//prompt the user to enter a sentence 
let answers = await inquirer.prompt([{
name :'sentence',
type:"input",
message:"Enter a Sentence",

}]);

//trimig the sentence and splittting it into words based on"spaces",
let words = answers.sentence.trim().split(" ");

//analysis of user input sentence

console.log("=".repeat(60));
console.log(chalk.bold(`- Sentence Words:`));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.bgRedBright(words.length)}`));
console.log("=".repeat(60));
