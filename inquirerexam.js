import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        name: "q1",
        message: "What's your name?",
        type: "input",
    },
    //   {
    //     name: "q1",
    //     message: "What's your gender?",
    //     type: "list",
    //     choices: ["Male", "Female" , "Other"],
    //   },
]);
console.log(`hello ${ans.q1}, how are you?`);
