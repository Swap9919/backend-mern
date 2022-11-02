// variable declarations and types 
// 1) var is a function scoped variable which can be initialzed with a value 
// 2) let, and var are block scoped varibales.
// examples

function abc(){
      console.log(a);
     // var a =2;
}
var a =10;
abc()

let a =4;
function abc(){
      // let a = 4;
      console.log(a);
}
abc()
console.log(a);

const a =2;
function abc(){
      console.log(a);
      const a=3;
}
abc()
console.log(a);

// hoisting is a javascript defalut behaviour of moving declarations to top of thr cuurent scope
function abc(){
      console.log(a);
      var a=2;
}
abc()

// functions : function is a block of code designed to perform perticular task, and it is executed when we invoke (call) it.
// types of function declarations 
// named function expression
function sum(a,b){
      return a+b;
}
console.log(sum(2,3));
// annonymous function 
const a = function (b,c){
   return b + c;
}
console.log(a(2,5));
// anonymous functions which are stored by the variable names are invoked by the variable names. 
const myFunction = function(a, b) { return a+b}
let x=myFunction(2,1)
console.log(x);
// functions can also be build using inbuilt javascript function constructors called functions.
// function hoisting 
// hoisting applies to variable declarations and to function decalrations
//because of this functions can be called before they are declared
console.log(myFunction(4));
function myFunction(y){return y+y};
//self invoking function
(function(){ 
      console.log("hello!");
})();
// fat arrow function is a compact alternative to tradional function expression , but it can not be used in all situations.
(function(a){  //traditional annonymous function 
      return(a * 10);
})();
// arrow function breakdown
(a)=> {
      return(a * 10) ;
};

(a)=> a * 10;
a => a* 10;