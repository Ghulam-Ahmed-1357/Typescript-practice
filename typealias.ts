// typeavailer
type chidren = {
  name: string;
  age: number;
  role: string;
};
type user = {
  name: string;
  age: number;
  role: string;
  children: chidren[];
};

let user1: user = {
  name: "Ahmed",
  age: 30,
  role: "father",
  children: [
    {
      name: "Umer",
      age: 5,
      role: "son",
    },
    {
      name: "Usman",
      age: 3,
      role: "son",
    },
  ],
};

console.log(user1.children[1].name);
console.log(user1);

// defining datatype

let user2: {
  name: string;
  age: number;
} = {
  name: "Usman",
  age: 16,
};
