/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding: can be overwritten using the "use strict" . It's value will be the console Object.
 * 2. Implicit Binding: commonly used, invokes the object to the left of the period.
 * 3. New Binding: references a constructor function to get a new object value.
 * 4. Explicit Binding: You use .call or .apply to reference .this on a method or function on the global scope. 
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function sayNameFour(name) {
    'use strict';
    console.log(this);
    return name;
}

console.log(sayNameFour("Hermione"));

// another example

let sayAge = function() {
    return ('this.age');
};

let myAge = {
    age: 30,
}

console.log(sayAge());


// Principle 2

// code example for Implicit Binding

var me = {
    name: 'Ronald',
    age: 32,
    sayName: function() {
        return `${this.name}`;
    }
}

console.log(me.sayName());

// another example
let sayNameMixin = function(obj) {
    obj.sayNameTwo = function() {
        return `${this.name}`;
    }
}

let her = {
    name: 'Estela',
    age: 27,
}

let him = {
    name: 'Marco',
    age: 30,
}

sayNameMixin(her);
sayNameMixin(him);

console.log(her.sayNameTwo());
console.log(him.sayNameTwo());

// Principle 3

// code example for New Binding

let myCar = function(color, transmission, brand) {
    this.color = color;
    this.tansmission = transmission;
    this.brand = brand;
};

let Civic = new myCar('gray', 'automatic', 'Honda');
console.log(Civic);


// Principle 4

// code example for Explicit Binding

let sayNameThree = function(lang1, lang2, lang3) {
    return ('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', and ' + lang3 + '.');
};

let Marco = {
    name: 'Marco',
    age: 34,
};

let languages = ['HTML', 'CSS', 'JS'];

console.log(sayNameThree.call(Marco, languages[0], languages[1], languages[2]));

console.log(sayNameThree.apply(Marco, languages));

let newFn = sayNameThree.bind(Marco, languages[0], languages[1], languages[2]);

console.log(newFn());