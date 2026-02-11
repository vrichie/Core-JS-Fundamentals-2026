# JavaScript Data Types & Operators Guide

This document provides a comprehensive overview of JavaScript data types and operators, corresponding to the examples in `datatypes.js`.

---

## Table of Contents
1. [Primitive Data Types](#primitive-data-types)
2. [Complex Data Types](#complex-data-types)
3. [Special Values](#special-values)
4. [Operators](#operators)

---

## Primitive Data Types

### 1. Strings
Strings represent textual data and can be enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

```javascript
let name = 'Jake';
```

**Key Points:**
- Immutable (cannot be changed after creation)
- Can contain any text characters
- Use backticks for template literals

---

### 2. Numbers
JavaScript has a single number type for both integers and floating-point numbers.

```javascript
let age = 45;
let price = 53.5;
```

**BigInt** for very large integers:
```javascript
let fileSize = 4875689576587878n;
let num2 = BigInt(568968545456);
```

**Key Points:**
- No separate types for integers and floats
- BigInt for numbers larger than `Number.MAX_SAFE_INTEGER` (2^53 - 1)
- Add `n` suffix or use `BigInt()` constructor

---

### 3. Boolean
Represents logical values: `true` or `false`.

```javascript
let isStudent = true;
let isInSession = false;
```

**Key Points:**
- Used in conditional statements
- Result of comparison operations
- Only two possible values

---

## Complex Data Types

### 4. Objects
Objects store collections of key-value pairs.

```javascript
const student = {
  name: "Jane",
  age: 6,
  marks: [76, 34, 53],
  course: { name: 'comp sci' }
};
```

**Key Points:**
- Syntax: `{ key: value, key: value }`
- Can contain any data type as values
- Can be nested (objects within objects)
- Accessed using dot notation (`student.name`) or bracket notation (`student['name']`)

---

### 5. Arrays
Arrays are ordered collections of values.

```javascript
const marks = [34, 56, 45, 67];
marks[0] = 90;  // Modifying array element
```

**Key Points:**
- Zero-indexed (first element is at index 0)
- Can contain mixed data types
- Mutable (can be modified)
- Declared with `const` can still have elements changed

---

### 6. Date Object
JavaScript's built-in object for working with dates and times.

```javascript
let today = new Date().getFullYear();
```

**Key Points:**
- Created using `new Date()`
- Provides methods like `getFullYear()`, `getMonth()`, `getDate()`
- Stores date/time as milliseconds since January 1, 1970

---

## Special Values

### 7. Undefined
A variable that has been declared but not assigned a value.

```javascript
let x;
console.log(x);  // undefined
x = 67;
```

**Key Points:**
- Default value for uninitialized variables
- Returned when accessing non-existent object properties
- Type is `undefined`

---

### 8. Null
Represents the intentional absence of any value.

```javascript
let y = null;
```

**Key Points:**
- Explicitly set by the programmer
- Different from `undefined`
- Type is `object` (historical JavaScript quirk)

---

## Operators

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3 = 8` |
| `-` | Subtraction | `5 - 3 = 2` |
| `*` | Multiplication | `5 * 3 = 15` |
| `/` | Division | `6 / 3 = 2` |
| `%` | Modulus (remainder) | `5 % 2 = 1` |
| `**` | Exponentiation | `2 ** 3 = 8` |
| `++` | Increment by 1 | `x++` or `++x` |
| `--` | Decrement by 1 | `x--` or `--x` |

**Example:**
```javascript
let num = 30;
let num22 = --num;  // Pre-decrement: num becomes 29, num22 = 29
num %= num22;       // num = num % num22
```

**Compound Assignment Operators:**
- `+=` (add and assign)
- `-=` (subtract and assign)
- `*=` (multiply and assign)
- `/=` (divide and assign)
- `%=` (modulus and assign)

---

### Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND (both must be true) | `true && false = false` |
| `||` | OR (at least one must be true) | `true || false = true` |
| `!` | NOT (inverts boolean) | `!true = false` |

**Example:**
```javascript
if (name == 'Jake' && age == 45) {
  console.log("Hello Jake");
} else {
  console.log("Not Jake");
}
```

---

### Comparison Operators

| Operator | Description |
|----------|-------------|
| `==` | Equal to (loose equality) |
| `===` | Strict equal to (type + value) |
| `!=` | Not equal to |
| `!==` | Strict not equal to |
| `>` | Greater than |
| `<` | Less than |
| `>=` | Greater than or equal to |
| `<=` | Less than or equal to |

**Best Practice:** Use `===` and `!==` for strict equality checks.

---

## Practical Examples

### Check if a number is odd or even
```javascript
let isOdd = 12 % 2;
if (isOdd == 1) {
  console.log("number is odd");
} else {
  console.log("number is even");
}
```

### Working with const and arrays
```javascript
const marks = [34, 56, 45, 67];
marks[0] = 90;  // ✅ This works - modifying array contents
// marks = [1, 2, 3];  // ❌ This fails - cannot reassign const
```

---

## Summary

JavaScript has several data types:
- **Primitive:** String, Number, Boolean, Undefined, Null, Symbol, BigInt
- **Complex:** Object, Array, Function, Date

Understanding these data types and operators is fundamental to writing effective JavaScript code.

---

## Additional Resources
- [MDN Web Docs - JavaScript Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [MDN Web Docs - Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
