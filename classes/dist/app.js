"use strict";
var Person = /** @class */ (function () {
    function Person(name) {
        this.age = 30;
        if (name) {
            this.name = name;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            var str = phrase + " " + this.name;
            console.log(str);
            return str;
        }
        throw new Error("not possible o");
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("Hi,how are you doing");
console.log(user1);
