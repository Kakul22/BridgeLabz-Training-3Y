
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        let total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "C";
        } else {
            return "F";
        }
    }
}

// Creating objects for 3 students
let s1 = new Student("Rahul", [85, 90, 80]);
let s2 = new Student("Priya", [65, 70, 60]);
let s3 = new Student("Aman", [30, 35, 25]);

let students = [s1, s2, s3];

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("------------------");
});
