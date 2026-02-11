# 🌐 Core JavaScript Fundamentals (Wednesday Class)

**Instructor:** Richard Kinyua  
**Class Time:** Wednesdays @ 21:00 EAT  
**Focus:** The Logic of the Web.

---

## 🚀 Quick Start

1. Open `index.html` in Google Chrome
2. Press `F12` or Right-click > Inspect
3. Click the **Console** tab
4. See "Hello, World!" message

---

## 📚 What You'll Learn

### The Console
The console is where JavaScript runs and shows output.

```javascript
console.log("Hello, World!");
```

That's it! JavaScript is running in your browser.

---

## 📊 JavaScript Data Types

JavaScript has several built-in data types for storing different kinds of information:

### 1. **String**
Text values enclosed in quotes.
```javascript
let name = "Jake";
let numString = "67";
```

### 2. **Number**
Numeric values (both integers and decimals).
```javascript
let age = 23;
let height = 6.2;
```

### 3. **BigInt**
For very large integers that exceed the safe integer limit.
```javascript
let a = 72742985294529n;
let b = BigInt(1234567890977654321);
```

### 4. **Boolean**
True or false values.
```javascript
let isActive = true;
let isDisabled = false;
```

### 5. **Object**
Collections of key-value pairs.
```javascript
let student = { name: "Jane", age: 24, course: "Computer science" };
```

### 6. **Array**
Ordered lists of values (a special type of object).
```javascript
let marks = [23, 4, 43, 54, 54, 78];
```

### 7. **Date**
Built-in object for working with dates and times.
```javascript
let today = new Date();
```

### 8. **Undefined**
Variables that have been declared but not assigned a value.
```javascript
let x;
let y;
```

### 9. **Null**
Intentional absence of any value.
```javascript
let n = null;
```

---

### 💡 Key Differences

- **undefined** = JavaScript's default for uninitialized variables
- **null** = Intentionally empty (set by programmer)
- **String vs Number**: `"67"` is text, `67` is a number
- **Number vs BigInt**: Use BigInt for integers larger than 2⁵³-1
