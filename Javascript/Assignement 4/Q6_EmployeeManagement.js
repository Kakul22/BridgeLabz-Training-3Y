"use strict";

// Creating Employee class
class Employee {

    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    // Calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Apply bonus to monthly salary
    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }

    // Display employee details
    displayDetails() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Department:", this.department);
        console.log("Monthly Salary:", this.salary);
        console.log("Annual Salary:", this.getAnnualSalary());
        console.log("----------------------");
    }
}

// Creating five employee objects
const employee1 = new Employee(1, "Rahul", "IT", 30000);
const employee2 = new Employee(2, "Priya", "HR", 25000);
const employee3 = new Employee(3, "Aman", "Finance", 35000);
const employee4 = new Employee(4, "Kakul", "Development", 40000);
const employee5 = new Employee(5, "Neha", "Marketing", 28000);

// Storing employees in an array
const employees = [
    employee1,
    employee2,
    employee3,
    employee4,
    employee5
];

// Applying 10% bonus to employee 4
employee4.applyBonus(10);

// Display employee details
console.log("Employee Details:");

employees.forEach(function(employee) {
    employee.displayDetails();
});

// Calculate total annual payout using reduce()
const totalAnnualPayout = employees.reduce(function(total, employee) {

    return total + employee.getAnnualSalary();

}, 0);

console.log("Total Annual Payout of Company:", totalAnnualPayout);