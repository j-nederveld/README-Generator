
var inquirer = require("inquirer");
var fs = require ("fs");

inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub user name?",
      name: "username"
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email"
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "projectname"
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description"
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      choices: ["MIT", "Apache", "GPL", "none"],
      name: "license"
    },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      default: "npm i",
      name: "install"
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      default: "npm test",
      name: "tests"
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "userinfo"
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      default: "npm i",
      name: "contributing"
    }
  ])

  .then(function(response) {
 console.log(response);

    //create the file (.split and .join take out the spaces if they entered first/lastname or something)
    // fs.writeFile(fileName, JSON.stringify(response, null, "\t"), (err) => {
    //    if (err){
    //      return console.log(err);
    //    }
    //    console.log("File written!");
    //  });
   });
