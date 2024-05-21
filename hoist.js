// hoist cannot be done in ts file it's a feature of javascript

console.log(age); // this will return 'undefined', because of 'var'
var age = 10; // var shift the declaration of variable to the top of the code (means it become global)
console.log(age); // 10
console.log(num1); // undefined
if (true) {
  var num1 = 18;
}
console.log(num1); // 18 (because of 'var')

//  console.log(num2); // this throughs error
let num2 = 15;
console.log(num2);
