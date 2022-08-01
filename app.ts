type Person = {
  name: string;
  age: number;
};

const person= {
  name: "Mirac",
  age: 30,
  hobbies:["Sports" , "Cooking" , "Exercising"],
};



let favActivities: Array<string>;

favActivities = ["sports"];
console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby);
}