const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

function printResults(num: number): void {
  console.log("Result: " + num);
}

// console.log
// printResults(add(5, 12));
function addAndHandle(n1:number,n2:number ,cb:(num:number) => void){

  const result = n1 + n2;

  cb(result);
 
}

console.log(printResults(add(5, 12)));

let combinedVals: (a:number,b:number) => number;

combinedVals = add;
// combinedVals = 5;
console.log(combinedVals(15, 12));

// console.log(printResults(combinedVals(15, 12)));



addAndHandle(10,20,(num:number) => {
  console.log(`Number from cb: ${num}`);
});

