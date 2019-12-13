const Employee = require("../lib/Employee");
describe("Employee", () => {
    const id = 1;
    const name = "Paul";
    const role = "Manager";
    const email = "phalcheat@gmail.com";
    describe("Instantiating", () => {
        it("should create an object with properties 'id', 'name', 'role', 'email'", () => {
            const emp = new Employee(id, name, role, email);
            expect(name).toEqual(emp.name);
            expect(id).toEqual(emp.id);
            expect(role).toEqual(emp.role);
            expect(email).toEqual(emp.email);
        });
    });
    describe("getName()", () => {
        it("should return name as a string", () =>{
            const emp = new Employee(id, name, role, email);
            expect(emp.getName()).toEqual(name);
        });
    });
    describe("getEmail()", () => {
        it("should return email as string", () => {
            const emp = new Employee(id, name, role, email);
            expect(emp.getEmail()).toEqual(email);
        });
    });
    describe("getRole()", () => {
        it("should return an object containing key-value pairs", () =>{
            const emp = new Employee(id, name, role, email);
            expect(emp.getRole()).toEqual({ id: id, name: name, role: role, email: email});
        });
    });
});
