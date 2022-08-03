"use strict";
function addN(n1, n2, showRes, phrase = "") {
    if (showRes === true) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const num1 = 5;
const num2 = 2.8;
const printResult = true;
let resultPhrase = "Result is :";
const res = addN(num1, num2, printResult);
// console.log(res);
