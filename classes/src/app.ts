interface Named {
  readonly name?:string;
  outputName?: string;
}
interface Greetable extends Named{
  greet(phrase:string): string;
}

class Person implements Greetable {
  name?: string;
  age:number = 30;
  constructor(name?:string){
    if(name){
      this.name = name;
    }
  }


  greet(phrase: string): string {
    if(this.name){
      const str = phrase + " " + this.name;
      console.log(str);
      return str ;
    }


    throw new Error("not possible o");
  }
}

let user1:Greetable;

user1 = new Person(); 



user1.greet("Hi,how are you doing");


console.log(user1);


