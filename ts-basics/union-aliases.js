"use strict";
function combine(n1, n2) {
    let res;
    if (typeof n1 === "number" && typeof n2 === "number") {
        res = n1 + n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    return res;
}
const combinedAges = combine(30, 26);
console.log(combinedAges, "combinedAges");
const combinedNames = combine("olu", "mide");
console.log(combinedNames, "combinedNames");
