const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, school, email){
        super(id, name, "Intern", email);
        this.name = name;
        this.school = school;
        this.email = email;
    }
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;
// const intern = new Intern(1);
// intern.schoolName = "UoM";
// intern.email = "paul@gmail.com";
// intern.role = "empl";
// intern.name = "Paul";
// console.log(intern.getRole());