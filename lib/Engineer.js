const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(id, name, gitHub, email){
        super(id, name, "Engineer", email);
        this.name = name;
        this.gitHub = gitHub;
        this.email = email;
    }
    getGitHub(){
        return this.gitHub;
    }
}

module.exports = Engineer;
// const eng1 = new Engineer(1);
// eng1.gitHub = "paul-kh";
// eng1.email = "paul@gmail.com";
// eng1.role = "empl";
// eng1.name = "Paul";
// console.log(eng1.getRole());
