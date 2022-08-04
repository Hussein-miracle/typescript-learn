// const names: Array<string> = ["Max" , "Manuel"];

// console.log(names);


// const promise: Promise<string> = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   },2000)
// });

// promise.then((data) => {
//   data.split(" ").join(" ");
// })

function merge<T extends object , U extends object> (objA: T, objB:U){
  return Object.assign(objA,objB);
  // return {...objA,...objB};
}



const mergedObj = merge({name:"Max",hobbies:["Cooking"]},{age:35}) ;

console.log(mergedObj , ",er")

mergedObj.name = "Bola";

console.log(mergedObj ,"mergedObj");
interface Len{
  length:number;
}

function countAndDescribe<T extends Len>(el:T):[T, string]{
  let descTxt = "Got no value"
  if(el.length === 1){
    descTxt = "Got 1 element"
  }else if(el.length > 1){
    descTxt = "Got "+  el.length +" elements"

  }

  return [el,descTxt];
}

console.log(countAndDescribe("ömolomw"))

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
  return "Value: " + obj[key];
}

const ans = extractAndConvert({name:"Max"},"name");
console.log("🚀 ~ file: app.ts ~ line 53 ~ ans", ans)



class DataStorage<T>{
  private data: T[] = [];

  addItem(item:T){
    this.data.push(item)
  }
  removeItem(item:T){
    const itemIndex = this.data.indexOf(item);



    if(itemIndex >= 0){
      this.data.splice(itemIndex,1)  ;
    }
  }


  getItems(){
    return [...this.data];
  }
}

const txtStorage = new DataStorage<string>();

txtStorage.addItem("Max")
txtStorage.addItem("Maxi")
txtStorage.addItem("Maximil")

console.log(txtStorage.getItems())



const numberStorage = new DataStorage<number>();



const objStore = new DataStorage<object>()



interface CourseGoal{
  title:string;
  description: string;
  completeUntil:Date;
}

function createCourseGoal(title:string,description:string,date:Date){
  let courseGoal : Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

const names:Readonly<string[]> = ["Max","Anne"];

// names.push("Manu");
console.log(names);