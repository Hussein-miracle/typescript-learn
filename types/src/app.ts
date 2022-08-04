type Admin = {
  name:string;
  priviledges: string[];
};

type Employee = {
  name:string;
  startDate: Date;
}


type ElevatedEmployee = Admin & Employee;


const e1:ElevatedEmployee = {
  name:"Max",
  priviledges:["create-server"],
  startDate: new Date()
}


console.log(e1 , "el");

type Combinable = string  | number;

type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:string,b:number):string;
function add(a:number,b:string):string;
function add(a:Combinable , b : Combinable){
  if(typeof a === "string" || typeof b === "string"){
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add("12"," 35");
console.log(result.split(" ") , "result")


const fetchedUser = {
  id:"u1",
  name:"Max",
  job:{
    title:"CEO",
    description:"My own company"
  }
}

console.log(fetchedUser?.job?.title);

const userInput = "";

const storedData = userInput ??  "DEFAULT";
console.log("app.ts storedData", storedData)


// type UnknownEmployee = Employee | Admin; // Intersection


// function printEmployeeInformation(emp:UnknownEmployee) {
//   console.log("Name: "+ emp.name);

//   if("priviledges" in emp){
//   console.log("Priviledges: " + emp.priviledges);
//   }
//   if("startDate" in emp){
//   console.log("Priviledges: " + emp.startDate);
//   }


// }

// printEmployeeInformation({name:"Manu",startDate: new Date()});


// class Car{
//   drive(){
//     console.log("Driving...");
//   }
// }

// class Truck{
//   drive(){
//     console.log("Driving a truck...");
//   }

//   loadCargo(amount:number){
//     console.log("Loading cargo ...." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();


// function useVehicle(vehicle:Vehicle){
//   vehicle.drive();

//   if(vehicle instanceof Truck){
//     vehicle.loadCargo(1000);
//   }
//   // if("loadCargo" in vehicle){
//   //   vehicle.loadCargo(1000);
//   // }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird{
//   kind:"bird";
//   flyingSpeed: number;
// }

// interface Horse{
//   kind:"horse";
//   runningSpeed:number;
// }

// type Animal = Bird | Horse;


// function moveAnimal(animal:Animal){
//   // if("flyingSpeed" in animal){
//   //   console.log("Moving with speed: " + animal.flyingSpeed);
//   // }

//   let speed;
//   switch(animal.kind){
//     case "bird":
//       speed = animal.flyingSpeed
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }

//     console.log("Moving at speed: " + speed);

// }


// moveAnimal({kind: "bird" , flyingSpeed: 10});


// const  p = <HTMLParagraphElement>document.getElementById("message-output");

// const inputEl = document.getElementById("user-input")! as HTMLInputElement;


// inputEl.value = " Hi there!";



// interface ErrorContainer{
//   [prop: string]:string;
// }


// const errorBag:ErrorContainer = {
//   email: "Not a valid email",
//   message:"must start with a capital character"
// }