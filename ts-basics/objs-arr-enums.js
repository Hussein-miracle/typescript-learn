"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: Array<string>; /// dynamic arry
//   role: [ number,string]; /// tuple immuttable non-dynamic arr
// } = {
//   name: "Mirac",
//   age: 30,
//   hobbies: ["Sports", "Cooking", "Exercising"],
//   role: [2,"Author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Mirac",
    age: 30,
    hobbies: ["Sports", "Cooking", "Exercising"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[0] = 10;
// // person.role[1] = "10"; 
// // person.role.push("admin");
// person.hobbies[4] = "345";
let favActivities;
favActivities = ["sports"];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase().split(""));
}
if (person.role === Role.AUTHOR) {
    console.log("is Author!");
}
