
// strings
let name='Jake';

// numbers
// int float double
let age=45;
// age=53.5;
let fileSize=4875689576587878n;
let num2=BigInt(568968545456);

//boolean
let isStudent=true;
let isInSession=false;

//objects syntax -> { key:value,key:value}
const student={name:"Jane",age:6,marks:[76,34,53],course:{name:'comp sci'}}
// console.log(student)

// array
const marks=[34,56,45,67];
console.log("Before",marks)
marks[0]=90;
// console.log(marks)

//Date object
let today=new Date().getFullYear();
// console.log(today);

//undefined
let x;
// console.log("value of x ",x);
x=67;

//null
let y=null;

// Operators
// = assigning
// arithmetic operators
// +,-,*,/
// **= exponential ,%= Modulus/remainder,++=increment by 1, --=decrement by 1
let num=30;
let num22=--num;
// num=num+num22;
// num=num-num22;
// num-=num22;
// num=num%num22;
num%=num22;
// num+=num22;
// console.log(num)
// let isOdd=12%2;
// if(isOdd==1){
// console.log("number is odd")
// }else{
// console.log("number is even")
// }

//Logical operators
// AND=&&, OR=||,NOT=!

if(name=='Jake' && age==45 ){
console.log("Hello Jake")
}else{
console.log("Not Jake")
}
