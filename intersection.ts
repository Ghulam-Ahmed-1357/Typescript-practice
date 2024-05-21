type student = {
  name: string;
  ronumber: number;
};
type teacher = {
  name: string;
  exp: number;
};

let st1: student = {
  name: "Ahmed",
  ronumber: 100,
};
let t1: teacher = {
  name: "Usman",
  exp: 2,
};

// intersection &&
let both: student & teacher = {
  name: "Umer",
  //   name: "Umer", // error
  ronumber: 136,
  exp: 4,
};

console.log(both);
