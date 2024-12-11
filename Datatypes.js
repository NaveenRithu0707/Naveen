//datatype
//primitive and non-primitive
// 1.Number
let age = 25;
console.log(age);
console.log(typeof age);

let price = 18.25;
console.log(price);
console.log(typeof price);

// 2. String--represent sequence of characters

let greeting = "Welcome to java"
console.log(greeting);

// 3. Boolean

let heEmployed = true;
let resigned = false;
console.log(heEmployed);
console.log(resigned);

// 4. undifined---the variable hthat have not declared the value

let box;
console.log(box);

// 5. Null

let room = "Null";
console.log(room);

let largeNum = BigInt(13654531564);
console.log(largeNum);


//non-primitive
// Represents a collection of data
// 1. Object
let person = {name: "Naveen", age: 30, employed: true,
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.employed);

// 2. Array
let numbers = [1,2,3,4,5,6]
console.log(numbers);

let mixedData = [1, "naveen", true]
console.log(mixedData);

//3. Function

function invite(){
    console.log("you are invited");
    
}
invite();

//4. date

let now = new Date();
console.log(now);















