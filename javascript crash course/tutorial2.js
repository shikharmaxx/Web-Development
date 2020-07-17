const x = '10';

if (x == 10) {
    console.log('x is 10');
}
else {
    console.log('x is not 10');
}
// == matches the datavalue
// === matches the datatype too

if (x === 10) {
    console.log('x is 10');
}

//     || or    ,   && and

const y = 10;
const color = y > 10 ? " red" : "blue";
console.log(color);
// this is ternary operator


//swtiuhc case
switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}



function addnums(num1, num2) {
    console.log(num1 + num2);
}//funcutions

addnums(5, 8);

//arror functuions
const addnums2 = (num1 = 1, num2 = 1) =>
    console.log(num1 + num2);
addnums2(6, 10);

//arrow functnion cuts things down
const addnums3 = num1 => num1 + 2;

console.log(addnums3(7));


//construtor funciton
function person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getfullname = function () {
        return `${this.firstname} ${this.lastname}`;
    }
    // this.getbirthyear = function () {
    //    return this.dob.getFullYear();
    //}//functions

}

//instatntiate an object
const person1 = new person('joe', 'lolo', '4-3-1980');
const person2 = new person('mary', 'nin', '9-3-1980');

console.log(person1);
console.log(person2.dob);

console.log(person1.getfullname());

//better way for function is to make prototype
person.prototype.getbirthyear = function () {
    return this.dob.getFullYear();
}

console.log(person2.getbirthyear());


//CLASSES
// this is know as syntactic sugar
//prettier way to do objects and ufncitons

class person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getbirthyear() {
        return this.dob.getFullYear();
    }
    getfullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const person1 = new person('joe', 'lolo', '4-3-1980');
const person2 = new person('mary', 'nin', '9-3-1980');

console.log(person1.getfullname());
console.log(person2);
