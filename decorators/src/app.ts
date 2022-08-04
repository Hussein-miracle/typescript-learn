function Logger(logString:string){

  return function(target: Function){
    console.log(logString);
    console.log(target, "target");
  }
  
} 

function withTemplate(template:string,hookId:string){
  return function(constructor:any){
    console.log("Rendering Template ....");
    const hookEl = document.getElementById(hookId);

    const p = new constructor();

    if(hookEl){
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  }
}
// @Logger("LOGGING - PERSON")
@withTemplate("<h1>My Person Object</h1>","app")
class Person{
  name = "Max";
  
  
  constructor(){
    console.log("Creating Person Object...");
  }
}


const person = new Person();


// console.log(person);


//  -----

function Log(target: any, propertyName: string | Symbol){
  console.log("Property decorator.");
  console.log(target , "Log target");
  console.log(propertyName , "Log propNAme");
}


function Log2(target: any, name: string  | Symbol,descriptor: PropertyDescriptor){
  console.log("Accessor decorator!.");
  console.log(target , "Log2 target");
  console.log(name , "Log2 name");
  console.log(descriptor , "Log2 descriptor");


}

function Log3(target: any, name: string | Symbol,descriptor: PropertyDescriptor){
  console.log("Method decorator!");
  console.log(target , "Log3 target");
  console.log(name , "Log3 name");
  console.log(descriptor , "Log3 descriptor");
}
function Log4(target: any, name: string | Symbol,position: number){
  console.log("parameter decorator!");
  console.log(target , "Log4 target");
  console.log(name , "Log4 name");
  console.log(position , "Log4 postion");
}

class Product{
  @Log
  title:string;
  private _price:number;
  
  @Log2
  set price(val: number){
    if(val >= 0){
      
      this._price = val;
    }else{
      throw new Error("Invalid price - should be positive!");
    }
  }
  constructor(t:string,p:number){
    this.title = t;
    this._price = p;
  }
  
  @Log3
  getPriceWithTax(@Log4 tax: number){
    return this._price * (1 + tax);
  }
}


interface ValidatorConfig{
  [property: string]:{
    [validateableProp: string]: string[]
  }
}

const registeredValidators:ValidatorConfig = {};

function Required(target:any,propertyName:string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]:["required"]
  }
}

function PostiveNumber(target:any,propertyName:string){
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]:["positive"]
  }
}

function validate(obj:any){
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if(!objValidatorConfig){
    return true;
  }

  let isValid = true;

  for(const prop in objValidatorConfig){
    for(const validator of objValidatorConfig[prop]){
      switch(validator){
        case "required":
          isValid = isValid && !!obj[prop];
          break;
          case "positive":
            isValid = isValid && obj[prop] > 0;
            break;
      }
    }
  }

  return isValid;
}

class Course{
  @Required
  title:string;
  @PostiveNumber
  price:number;

  constructor(title: string,price: number){
    this.title = title;
    this.price = price;
  }
}


const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleEL = document.getElementById("title") as HTMLInputElement;

  const priceEL = document.getElementById("price") as HTMLInputElement;


  const title = titleEL.value;
  const price = +priceEL.value;


  const course = new Course(title,price);
  if(!validate(course)){
    alert("Invalid Inputs");

    return;
  }
  console.log("course", course)

})
