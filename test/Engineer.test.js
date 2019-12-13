const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
describe("Engineer", () => {
    const id = 1;
    const name = "Paul";
    const role = "Manager"; // Try to set role to be different from "Engineer"
    const email = "phalcheat@gmail.com";
    const gitHub = "paul-kh";
    describe("Instantiating", () => {
        it("should create an object with properties 'id', 'gitHub'", () => {
            const eng = new Engineer(id, name, gitHub, email);
            expect(name).toEqual(eng.name);
            expect(id).toEqual(eng.id);
            expect(gitHub).toEqual(eng.gitHub);
            expect(eng.role).toEqual("Engineer");
            expect(email).toEqual(eng.email);
        });
        it("should expand with property 'role' and methods 'getName', 'getEmail', and 'getRole' of the class 'Employee'", () =>{
            const emp = new Employee(id, name, role, email);
            const eng = new Engineer(id, name, gitHub, email);
            const isEqual = eng.getRole() === emp.getRole();
            // role is reset to be "Engineer" when instatiating the object Engineer
            expect(emp.role).toEqual("Manager");
            expect(eng.getEmail()).toEqual(emp.getEmail());
            expect(eng.getName()).toEqual(emp.getName());
            expect(isEqual).toEqual(false);
        });
    });

    describe("getRole()", () => {
        it("should return an object containing key-value pairs", () =>{
            const eng = new Engineer(id, name, gitHub, email);
            expect(eng.getRole()).toEqual({ id: id, name: name, gitHub: gitHub, role: "Engineer", email: email});
        });
    });
});
