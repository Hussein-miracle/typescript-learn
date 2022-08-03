



function addN(n1:number,n2:number,showRes:Boolean,phrase:string = ""){


  if(showRes === true){
    console.log(phrase + n1 + n2 );
  }else{
    return n1+n2;
  }
}


const num1:number = 5;
const num2:number = 2.8;

const printResult:boolean = true;
let resultPhrase = "Result is :";

const res = addN(num1,num2,printResult);

// console.log(res);