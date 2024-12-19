//1.Write an arrow function that takes two 
// parameters, a and b, and returns their sum.
//model 1
let z = (a, b) => {
     return a + b;
};
console.log(z(4,8)); //12
//model 2
let add = (a, b) => a + b;
console.log(add(10, 80)); //90

// 2.Create an arrow function that takes a 
// single parameter name and returns a 
// greeting message: “Hello, {name}!”

let greetings = name => `Hello, ${name}!`;
console.log(greetings("teju"));

// 3.Write an arrow function that checks if 
// a number is even and returns true if it 
// is, or false otherwise.

let isEven = num => num % 2 === 0;
console.log(isEven(6));
console.log(isEven(9));

// 4.Write an arrow function that accepts a 
// number and returns true if the number is 
// greater than 10, or false otherwise.

let isGreaterthan10 = (num) => num > 10;
console.log(isGreaterthan10(6));
console.log(isGreaterthan10(12));

// 5.Create an arrow function that takes two
// strings, compares their lengths, and 
// returns the longer string. If both have 
// the same length, return “Equal length.”

let compareStringLengths = (a, b) => {
    if (a.length > b.length) {
        return a;
    }
    else if (b.length > a.length) {
        return b;
    }
    else {
        return "Equal Length";
    }
};
console.log(compareStringLengths("puppy", "rabbit"));
console.log(compareStringLengths("tej", "Sai"));