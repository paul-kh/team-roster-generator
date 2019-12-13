class Employee {
    constructor(id, name, role, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return {id: this.id, name: this.name, role: this.role, email: this.email};
    }
}

module.exports = Employee;