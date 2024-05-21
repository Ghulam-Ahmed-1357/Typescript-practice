// function () {working}
// function (parameters:datatype,parameters:datatype):datatype {working}
function myfunc() {
    return "Hello World";
}

myfunc();  // without console.log() function will not work
console.log(myfunc());

function myfunc2(a: number, b: number) {
    return a + b;
}

console.log(myfunc2(2, 5));

function myfunc3(firstname: string, lastname: string): string {
    return firstname + lastname;
}

console.log(myfunc3("Ghulam ", "Ahmed"));

function myfunc4(message = 'hello') { // we can also pass default values, when no parameter is passed when function is called then it prints the default value
    return message;
}

console.log(myfunc4());
console.log(myfunc4("Ahmed"));

let n = 0;
console.log('number = ${n}');

