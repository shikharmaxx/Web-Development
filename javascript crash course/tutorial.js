console.log("hello world");

//console.error('this is an error');

//alert('BRUH');

// for the most part dont use var it leads to conflict

//const age = 40;
//age = 90;
// const value cant be ressigned
// if u ddo u get an error

//const score;
// this throws error as u need to alawys insitializwe ht econst

let age = 90;
age = 89;
// this is acceptable value can change wirth let

console.log(age);

const name = "john"; //string double or single quotoes
// both type of qutos can be used

const num = 50; //number
const iscool = true;
const rating = 4.5; // no float in js
//evertyhing is a number
const x = null; // prints object in console but that is not true
// it is nopthing but showns as object but not a object
//hard to explain
const y = undefined;
let z; //also undeifined

console.log(typeof rating);

//concatenation
console.log("my name is " + name + "and i am " + age);

//template string
console.log(`my name is ${name} and i am ${age}`);
//this is the back tick left to the num 1 key

const s = "helloppepe";
console.log(s.length);
console.log(s.toUpperCase());

console.log(s.split(""));
//splits the sting into array

const k = "tech, comp, it, mama";
console.log(k.split(", "));
//splits according to , into array of 4

const fruits = ["appple", "orange", 1, true];
console.log(fruits);
//freedom of multiplae datatype in one array
fruits[4] = "hola"; //adding new value
fruits.push(89); //add atth end
fruits.unshift("first butchj"); //add at beginneig
console.log(fruits[0]);
fruits.pop(); //remove the last elmenets
console.log(fruits);

console.log(fruits.indexOf("appple"));

const numbers = new Array(); //create a new array

//object literals
const person = {
  firstname: "john",
  lastname: "doe",
  age: 30,
  hobbies: ["music", "games"],
  address: {
    street: "50 main strt",
    city: "boston",
    state: "ma",
  },
};

console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstname, lastname } = person;
//pullign the thing out
person.email = "john@hmail.com";
console.log(firstname);
console.log(person);

const todos = [
  {
    id: 1,
    text: "take out trash",
    iscompleted: true,
  },
  {
    id: 2,
    text: "meting wiht boass",
    iscompleted: true,
  },
  {
    id: 3,
    text: "appt",
    iscompleted: false,
  },
];

console.log(todos[0].text);

//if we want to convert abovve to JSON
//and send it to the server
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//FOR LOOPS
for (let i = 0; i < 10; i++) {
  console.log(`for loop number ${i}`);
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
} // loopm on array

for (let todo of todos) {
  console.log(todo.id);
} //another type of iteration on array

//for each,map,filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
}); //returing to a new array const
console.log(todoText);

const todocompleted = todos
  .filter(function (todo) {
    return todo.iscompleted == true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todocompleted);
