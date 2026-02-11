// JavaScript console output example.
// Java: System.out.println("Hello world")
// C: printf("Hello world")
console.log("Hello, World!");


// Variables: let (re-assignable), var (legacy), const (cannot be re-assigned).
let age = 21.5; // re-assignable value
var name = false; // legacy declaration (avoid in modern JS)
const isStudent = false; // constant (cannot be re-assigned)
const pi = 3.141; // constant value

console.log(age);

// Re-assigning a different type to the same variable (allowed, but avoid for clarity).
age = "jane";

// Object and array examples.
const student = { name: "Jane", isStudent: false, age: 21 };
const marks = [23, 45, 235, "jane"];

console.log(student)
console.log(student.name);
console.log(marks);
// You cannot reassign a constant, it results in an error if its basic data type
// pi=34;
// but you can reassign/modify items in an array or Object;
marks[0]='test';
student.name='Jake';
console.log(marks)
console.log(student)
