const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
describe("Manager", () => {
    const id = 1;
    const name = "Paul";
    const role = "Engineer"; // Try to set role to be different from "Manager"
    const email = "phalcheat@gmail.com";
    const officeNum = 101;
    describe("Instantiating", () => {
        it("should create an object with properties 'id', 'officeNum'", () => {
            const mgr = new Manager(id, name, officeNum, email);
            expect(name).toEqual(mgr.name);
            expect(id).toEqual(mgr.id);
            expect(officeNum).toEqual(mgr.officeNum);
            expect(mgr.role).toEqual("Manager");
            expect(email).toEqual(mgr.email);
        });
        it("should expand with property 'role' and methods 'getName', 'getEmail', and 'getRole' of the class 'Employee'", () =>{
            const emp = new Employee(id, name, role, email);
            const mgr = new Manager(id, name, officeNum, email);
            const isEqual = mgr.getRole() === emp.getRole();
            // role is reset to be "Manager" when instatiating the object Manager
            expect(emp.role).toEqual("Engineer");
            expect(mgr.getEmail()).toEqual(emp.getEmail());
            expect(mgr.getName()).toEqual(emp.getName());
            expect(isEqual).toEqual(false);
        });
    });

    describe("getRole()", () => {
        it("should return an object containing key-value pairs", () =>{
            const mgr = new Manager(id, name, officeNum, email);
            expect(mgr.getRole()).toEqual({ id: id, name: name, officeNum: officeNum, role: "Manager", email: email});
        });
    });
});
