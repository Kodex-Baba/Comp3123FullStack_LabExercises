//TODO - Create Employee Module here and export to use in index.js

class Employee {
    constructor(id, firstName, lastName, email, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salary = salary;
    }
}

let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "John", lastName: "Doe", email: "john@gmail.com", Salary:4000},
    {id: 3, firstName: "Bella", lastName: "Hoechlin", email: "bella@gmail.com", Salary:5000},
    {id: 4, firstName: "Denielle", lastName: "Rose", email: "denielle@gmail.com", Salary:6000}
]

// Export the employees array and the Employee class
module.exports = { employees, Employee };