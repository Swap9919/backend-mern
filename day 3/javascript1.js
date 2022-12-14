// everything in javascript happens inside an execution context
// execution context has 2 shades variable environment(memory component) and thread of execution (code component)
// javascript is a synchronous(specific order) single threaded language 
// call stack maintains the order of execution of execution context
// anything which is not inside a function is a global space 
//window and this keyword // window is a global space where as this point to the window object
// javascript allocates memory in global execution context even before the code is executed
// undefined takes up some memory and it is not empty it is like a place holder
//javascript is a loosely typed language  
// scope, scope chain, and lexical environment 
//scope is where we can access a specific function or a variable in our code
// scope chain is  the chain of all the  lexical environment of the parent references
// where ever an execution context is created a lexical environment is also created.
// lexical environment is the local memory along with the lexical environment of its parent
// lexical means a hierarchy or in a sequence