let fruitarray: string[] = ["Apple", "banana", "mango", "orange"];

fruitarray.push("grapes");
fruitarray.pop();
fruitarray.unshift("pineapple");
fruitarray.shift();
console.log(fruitarray.slice());
console.log(fruitarray.slice(2, 4));
console.log(fruitarray.slice(1));
console.log(fruitarray.slice(2, 1)); // returns an empty array
console.log(fruitarray.slice(2, 7));
console.log(fruitarray[4]);
console.log(fruitarray.splice(0, 1));
console.log(fruitarray);
// console.log("remove all", fruitarray.splice(0));
console.log(fruitarray);
console.log("remove 2 from middle", fruitarray.splice(1, 2)); //splice(start_index,count of deleting numbers)
console.log(fruitarray);
