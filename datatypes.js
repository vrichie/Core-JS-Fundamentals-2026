
// ============================================
// STRINGS
// ============================================
let name = 'Jake';
console.log('String:', name);


// ============================================
// NUMBERS
// ============================================
// JavaScript numbers can be integers or floats
let age = 45;
// age = 53.5;

// BigInt for very large integers
let fileSize = 4875689576587878n;
let num2 = BigInt(568968545456);
console.log('Number:', age);
console.log('BigInt:', fileSize);


// ============================================
// BOOLEAN
// ============================================
let isStudent = true;
let isInSession = false;
console.log('Boolean:', isStudent);


// ============================================
// OBJECTS
// ============================================
// Syntax: { key: value, key: value }
const student = {
  name: "Jane",
  age: 6,
  marks: [76, 34, 53],
  course: { name: 'comp sci' }
};
console.log('Object:', student);


// ============================================
// ARRAYS
// ============================================
const marks = [34, 56, 45, 67];
console.log('Array Before:', marks);
marks[0] = 90;
console.log('Array After:', marks);


// ============================================
// DATE OBJECT
// ============================================
let today = new Date().getFullYear();
console.log('Current Year:', today);


// ============================================
// UNDEFINED
// ============================================
let x;
console.log('Undefined value:', x);
x = 67;
console.log('After assignment:', x);


// ============================================
// NULL
// ============================================
let y = null;
console.log('Null value:', y);


// ============================================
// ARITHMETIC OPERATORS
// ============================================
// = (assignment)
// + (addition), - (subtraction), * (multiplication), / (division)
// ** (exponential), % (modulus/remainder)
// ++ (increment by 1), -- (decrement by 1)

let num = 30;
let num22 = --num;
// num = num + num22;
// num = num - num22;
// num -= num22;
// num = num % num22;
num %= num22;
// num += num22;
console.log('Arithmetic result:', num);

// Example: Check if number is odd or even
// let isOdd = 12 % 2;
// if (isOdd == 1) {
//   console.log("number is odd")
// } else {
//   console.log("number is even")
// }


// ============================================
// LOGICAL OPERATORS
// ============================================
// && (AND), || (OR), ! (NOT)

if (name == 'Jake' && age == 45) {
  console.log("Hello Jake");
} else {
  console.log("Not Jake");
}
