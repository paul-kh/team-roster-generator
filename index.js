const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const genRoster = require("./lib/genRosterHTML");
const fs = require("fs");
const rosters = [];

class App {
    constructor() { }
    askToAddMember() {
        inquirer.prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Add another member?"
            }
        ])
            .then(val => {
                // if user says yes
                if (val.choice) {
                    console.log("add more member");
                    this.addMember();
                } else {
                    this.createRosterHTML(rosters);
                    console.log(rosters);
                }
            });
    }
    addMember() {
        inquirer.prompt([
            {
                type: "list",
                choices: ["Manager", "Engineer", "Intern"],
                message: "Please select role for new member:",
                name: "role"
            }
        ]).then(answers => {
            if (answers.role === "Manager") {
                // prompt user to input manager's data
                this.inputMemberInfo(answers.role);
            }
            if (answers.role === "Engineer") {
                // prompt user to input engineer's data
                this.inputMemberInfo(answers.role);
            }
            if (answers.role === "Intern") {
                // prompt user to input intern's data
                this.inputMemberInfo(answers.role);
            }
        });
    }
    createRosterHTML(employees){
        fs.writeFile("./output/roster.html", genRoster.genRosterHtml(employees),function(err){
            if (err){
                console.log("Error writing file: ", err);
            } else { console.log("Roster HTML was created successfully!");}

        })
    }
    
    inputMemberInfo(role) {
        console.log(role);
        if (role === "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "id",
                    message: "Enter manager ID (number only):",
                    validate: function(id){
                        return /[1-9]/gi.test(id);
                    }
                    
                },
                {
                    type: "input",
                    name: "officeNum",
                    message: "Enter manager's office number:",
                    validate: function(val){
                        return /[1-9]/gi.test(val);
                    }
                },
                {
                    type: "input",
                    name: "name",
                    message: "Enter name:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter email address (example: paul@fakemail.com):",
                    validate: function(email){
                        return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(email);
                    }
                }
            ]).then(answers => {
                const mgr = new Manager(answers.id, answers.name, answers.officeNum, answers.email);
                
                // Push all properties of object 'mgr' into the array 'rosters'
                rosters.push(mgr.getRole());
                this.askToAddMember();
            });
        }
        if (role === "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "id",
                    message: "Enter employee ID (number only):",
                    validate: function(id){
                        return /[1-9]/gi.test(id);
                    }
                },
                {
                    type: "input",
                    name: "name",
                    message: "Enter name:"
                },
                {
                    type: "input",
                    name: "gitHub",
                    message: "Enter engineer's GitHub username:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter email address (example: paul@fakemail.com):",
                    validate: function(email){
                        return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(email);
                    }
                }
            ]).then(answers => {
                const engineer = new Engineer(answers.id, answers.name, answers.gitHub, answers.email);
                // Push all properties of object 'engineer' into the array 'rosters'
                rosters.push(engineer.getRole());
                this.askToAddMember();
            });
        }
        if (role === "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "id",
                    message: "Enter employee ID (number only):",
                    validate: function(id){
                        return /[1-9]/gi.test(id);
                    }
                },
                {
                    type: "input",
                    name: "name",
                    message: "Enter name:"
                },
                {
                    type: "input",
                    name: "school",
                    message: "Enter intern's school name:"
                },
                {
                    type: "input",
                    name: "email",
                    message: "Enter email address (example: paul@fakemail.com):",
                    validate: function(email){
                        return  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(email);
                    }
                }
            ]).then(answers => {
                const intern = new Intern(answers.id, answers.name, answers.school, answers.email);
                // Push the all properties of object 'intern' into the array 'rosters'
                rosters.push(intern.getRole());
                this.askToAddMember();
            });
        }
    }
}


const app = new App()
app.addMember();

