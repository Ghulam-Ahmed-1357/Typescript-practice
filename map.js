let st_data = {
    name: "Ahmed",
    age: 22,
    address: "abc",
};
console.log(st_data);
console.log(st_data.name);
console.log(st_data["name"]);
let property = "name";
console.log(st_data[property]); //to do this add type any to the object(map) or (st_data)
export {};
// console.log(st_data.property); //this will give error as property is not a property of the object
