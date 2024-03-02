// Variables
var name = "code crafters";
let yearOrCreation = 2024;
const IS_CODE_CRAFTERS_COOL = true; 

//Data types

let number = 10; 
let text = "Hello, World!"; 
let isTrue = true; 
let fruits = ["apple", "banana", "orange"]; 
let person = { name: "John", age: 30 }; 


//Arithmetic Operators (+, -, *, /, %)
//Comparison Operators (==, ===, !=, !==, >, <, >=, <=)
//Logical Operators (&&, ||, !)
//Assignment Operators (=, +=, -=, *=, /=)

//if else conditions 
let condition = true;
if (condition) {
    // code to execute if the condition is true
}else {
    // exectue if the condition is false
}

function add(a, b){
    return a + b;
}
console.log(add(1, 2))

let hackers = [
    { id: 1, name: 'beta', rank: 85 },
    { id: 2, name: 'alfa', rank: 95 },
    { id: 3, name: 'lambda', rank: 75 },
    { id: 4, name: 'gamma', rank: 90 }
];
  
  console.log('List of Hackers names:');
  hackers.forEach(hacker => {
    console.log(hacker.name);
  });
  
  let highPerforming = hackers.filter(hacker => hacker.rank > 80);
  console.log('High-performing hackers:');
  console.log(highPerforminghackers);
  
  let hackerInfo = hackers.map(hacker => {
    return {
      name: hacker.name,
      rank: hacker.rank
    };
  });
  console.log('hacker info:');
  console.log(hackerInfo);
  


