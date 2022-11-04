// let and const declarations are hoisted they are limited by a space called temporal dead zone
// we cannot access let variable before initialization
console.log(a); 
let a =10; // a is in a temporal deadzone for the time beign
var b=10;
// temporal deadzone is the time since when this let variable is hoisted and till it is initialized some value that time is called temporal deadzone
// difference between let and const
// let is block scoped variable and it can be made available only in the current scope
// you cannot redeclare let variable but you can modifiy it
// const variable can be declared and intialized only once and its scope is block level 
let a;
const b=10;
a =10
b=1; // assignment to constant varibale.
console.log(a);
// let and const memory is allocated in separate script memory 
//type error says that assignment to a constant variable
// syntax error is missing initializer to const variable
//reference error is when we try to access let variable before it is initialized or not defined error
// its better practise to keep all the intitialization and declaration on top of the code to avoid the temporal dead zone
// data type is a collaboration that specifies the type of value a variable has.
// strings, numbers, objects, undefined, boolean
//ternary operator takes 3 operands a statement followed by a question mark then an expression if the condition is truthy followed by solon 
// and finally the expression to execute if the condition is falsy


