"use strict";
const add = (n1, n2) => {
    return n1 + n2;
};
function printResults(num) {
    console.log("Result: " + num);
}
// console.log
// printResults(add(5, 12));
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
console.log(printResults(add(5, 12)));
let combinedVals;
combinedVals = add;
// combinedVals = 5;
console.log(combinedVals(15, 12));
// console.log(printResults(combinedVals(15, 12)));
addAndHandle(10, 20, (num) => {
    console.log(`Number from cb: ${num}`);
});
