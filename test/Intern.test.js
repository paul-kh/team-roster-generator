const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");
describe("Intern", () => {
    const id = 1;
    const name = "Paul";
    const role = "Engineer"; // Try to set role to be different from "Intern"
    const email = "phalcheat@gmail.com";
    const school = "University of Minnesota"
    describe("Instantiating", () => {
        it("should create an object with properties 'id', 'school'", () => {
            const internObj = new Intern(id, name, school, email);
            expect(name).toEqual(internObj.name);
            expect(id).toEqual(internObj.id);
            expect(school).toEqual(internObj.school);
            // role is reset to be "Intern" when instatiating the object Intern
            expect(internObj.role).toEqual("Intern");
            expect(email).toEqual(internObj.email);
        });
        it("should expand with property 'role' and methods 'getName', 'getEmail', and 'getRole' of the class 'Employee'", () =>{
            const emp = new Employee(id, name, role, email);
            const internObj = new Intern(id, name, school, email);
            const isEqual = internObj.getRole() === emp.getRole();
            expect(emp.role).toEqual("Engineer");
            expect(internObj.getEmail()).toEqual(emp.getEmail());
            expect(internObj.getName()).toEqual(emp.getName());
            expect(isEqual).toEqual(false);
        });
    });

    describe("getRole()", () => {
        it("should return an object containing key-value pairs", () =>{
            const internObj = new Intern(id, name, school, email);
            expect(internObj.getRole()).toEqual({ id: id, name: name, school: school, role: "Intern", email: email});
        });
    });
});
