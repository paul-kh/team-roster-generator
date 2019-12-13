const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const genRoster = require("./lib/genRosterHTML");
const fs = require("fs");
const rosters = []; // array to store each team member after added

// create the class 'App' for controlling the flow of the application
class App {
    constructor() { }
    // Method that asks users if they want to add another member
    askToAddMember() {
        inquirer.prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Add another member?"
            }
        ])
            .then(val => {
                // if users say yes, allow users to add another member
                if (val.choice) {
                    this.addMember();
                } else { // if users say no, create roster HTML
                    this.createRosterHTML(rosters);
                    console.log(rosters);
                }
            });
    }
    // Method that allows users to add a new member
    addMember() {
        inquirer.prompt([
            {   // give users the list of roles to choose for the new member to be added
                type: "list",
                choices: ["Manager", "Engineer", "Intern"],
                message: "Please select role for new member:",
                name: "role"
            }
        ]).then(answers => { // after users chose a role, prompt users to input data accordingly to the chosen role
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
    // Method that generate HTML file of roster based on the number of team members that were added
    createRosterHTML(employees){
        fs.writeFile("./output/roster.html", genRoster.genRosterHtml(employees),function(err){
            if (err){
                console.log("Error writing file: ", err);
            } else { console.log("Roster HTML was created successfully!");}

        })
    }
    // Method that prompts users to add member's data according to his/her role, then push the new member to the array 'rosters'
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
                        // validate if users input data in email format
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
// create object instance 'app'
const app = new App()
// start app by prompting users to choose a role for the new member to be added to the team
app.addMember();

