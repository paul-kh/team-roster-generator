const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, officeNum, email){
        super(id, name, "Manager", email);
        this.name = name;
        this.officeNum = officeNum;
        this.email = email;
    }
    
    getRole(){
            return {id: this.id, officeNum: this.officeNum, name: this.name, role: this.role, email: this.email};
    }
    getOfficeNum(){
        return officeNum;
    }
}

module.exports = Manager;

// const manager = new Manager(101);
// manager.id = 1;
// manager.officeNum = 101;
// manager.name = "Paul";
// manager.email = "paul@gmail.com";
// console.log(manager.getRole());

// // -------------------------------
// const manager2 = new Manager(102);
// manager2.id = 2;
// manager2.name = "Tom";
// manager2.email = "Tom@gmail.com";
// manager2.role = "engineer"; // Try to change role to see if role is actually changed or not?
// console.log(manager2.getRole());
