// syntax  let function_name = () => {}
// if we have one line of code
// it runs without return
let greet = () => "hello";
// if we have multiple lines of code
// it must contain return statement
let greet1 = () => {
    return "Ahmed";
};
// defining type of the variable
let greet2 = () => {
    return 2;
};
console.log(greet(), greet1(), greet2());
export {};
