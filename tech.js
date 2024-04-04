#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.bgWhite.red("\n\tWELCOME TO THE TODO LIST APP"));
async function createTodo(todos) {
    while (condition) {
        let ansOperation = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Please select one option",
                choices: ["add", "update", "delete", "view", "exit"],
            },
        ]);
        if (ansOperation.option === "add") {
            let addTask = await inquirer.prompt([
                {
                    name: "add",
                    type: "input",
                    message: "Please let us know what you want to add here:",
                },
            ]);
            todos.push(addTask.add);
            console.log(todos);
        }
        if (ansOperation.option === "update") {
            let updateTodo = await inquirer.prompt([
                {
                    name: "update",
                    type: "list",
                    message: ("what you want to update in your todo list?"),
                    choices: todos.map((item) => item),
                },
            ]);
            let addTask = await inquirer.prompt([
                {
                    name: "add",
                    type: "input",
                    message: "Please let us know what you want to add to the todo list:",
                },
            ]);
            let newTodo = todos.filter((item) => item !== updateTodo.update);
            todos = [...newTodo, addTask.add];
            console.log(chalk.bgWhite.red("\n\tYOUR UPDATED TODO LIST:"));
            console.log(todos);
        }
        if (ansOperation.option === "delete") {
            let deleteTodos = await inquirer.prompt([
                {
                    name: "delete",
                    type: "list",
                    message: "Do you want to remove something from a todo?",
                    choices: todos.map(val => val),
                },
            ]);
            let newTodo = todos.filter(val => val !== deleteTodos.delete);
            console.log(chalk.bgWhite.red('\n\tYOU HAVE SUCCESSFULLY REMOVED ' + deleteTodos.delete));
            todos = [...newTodo];
            console.log(todos);
        }
        if (ansOperation.option === "view") {
            console.log(chalk.bgWhite.red(`\n\tYOUR TODO LIST`));
            console.log(todos);
        }
        if (ansOperation.option === "exit") {
            console.log(chalk.bgRed.white("\n\tTHANKYOU FOR CHOOSING TODO APP"));
            break;
        }
    }
}
createTodo(todos);
