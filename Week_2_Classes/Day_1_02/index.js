// Function Declaration
// Is a named function that CAN be stored in a variable
function sum (a, b) {
    return a + b;
}

console.log(sum);

const mySum = sum;
console.log(mySum);


// Function expression
// Is an anonymous function that IS stored in a varieable
const newSum = function (a, b) {
    return a + b;
}

console.log(newSum(10, 45));

// Function declaration IS hoisted to the top (can call before declaring)
checkFuncDeclaration (); // posso chamar ela a qualquer hora, antes ou depois porque o sistema le a funcao de baixo no comeco, entao posso declarar ela no final que nao importa. (Function Declaration)

function checkFuncDeclaration() {
    console.log('Function Declaration');
};

// Function expression DOESN'T get hoisted (cannot call before initialization)
checkFuncExpression(); // essa ja nao posso, tem que ser depois.

const checkFuncExpression = function () {
    console.log('Function Expression');
};

// Callbacks
function doFirst() {
    setTimeout(function()) {
        console.log('Do this first')
    }, 1000)
}

function doAfter() {
    console.log('Do this only after');
}

doFirst();
doAfter();


function getUserInfo(callback) {
    setTimeout(function()) {
        console.log('Got user info')
        callback()
    }, 1000)
}
function printUserInfo() {
    console.log('Name: Andre');
}

//Pass the callback function as an argument WITHOUT parentheses (that would trigget the function);
getUserInfo(printUserInfo);
printUserInfo();


// Callback example
let myArr = [1,2,3,4];
myArr.forEach(el => {
    console.log(el);
});

/* myArr.forEach(function (el => {
    console.log(el)
} */

// Anonymous function - function without a name / usually when we want to perform the action only once
function getLength(str, callback) {
    callback(str);
}

getLength('Example String', function (str) {
    console.log(str.length);
});

//setTimeout
setTimeout(function ()) {
    console.log(`I'm going to take a while`);
}, 2000);

//setTimeout((), 1000) - a funcao e o delay (miliseconds)

// Arrow functions
// Can only be used with function expression

// Old syntax
const greeting = function (name) {
    console.log(`Hello ${name}`);
};
greeting(`Xico`);

// Arrow syntax (ES6)
const greeting = (name) => {
    console.log(`Hello ${name}`);
};
greeting(`Xico`);



const greeting = (name) => {
    return name;
};
let storedName = greeting(`Xico`);
console.log(storedName);


// Direct return
const greeting = (name) => name;
const arrowSum = (a, b) => a + b;

// Arrow syntax and scope
const user = {
    name: 'Diogo',
    age: 31,
    getOlder: function () {
        // By using arrow syntax, the this stops referring to setInterval and becomes attached to the object again
        setInterval(() => {
        this.age += 1;
        console.log(this.age);
    }, 1000)
  },
};
user.getOlder();

// Arguments object

function printArgs() {
    // arguments is a keyword
    console.log(arguments);
}

printArgs(1, `Hey`, false);

// arguments is an array-like object - it is an object
// it has index 0 and has length
// we can't use forEach / filter / reduce because it's not an array 
function sumArgs() {

    // const args = Array.from(arguments) - pra transformar ele em array. provavelmente nunca vamos usar

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
    return sum;
}

sumArgs(1, 3, 4, 5);
sumArgs(1, 3);
sumArgs(1, 113, 34, 25, 1222);
sumArgs(441, 2133, 4, 5, 4321, 54, 12);


// Array methods
// Map, Reduce, filter - Don't mutate the original array
// They return a new array

let myArr = [1, 2, 3];

// Map
const mappedArray = myArr.map((num) => num * 2)
//ou - mas dai temos que usar o return
const mappedArray = myArr.map((num) => {
    return num * 2;
});

console.log(mappedArray);

const stringArray = ['can', 'you', 'hear', 'me', 'now?'];
const scream = stringArray.map((str) => str.toUpperCase());
console.log(scream);


// Reduce - Joins everything in the array
arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
})

arr.reduce((acc, val) => acc + val)

let numArray = [2, 4, 6, 8];
const totalSum = numArray.reduce((acc, val) => {
    console.log(`Accumulator is currently: ${acc}, value is ${val}`)
    return acc + val;
})

const separateChars = ['U', 'n', 'i', 't', 'e', 'd'];
const united = separateChars.reduce((acc, val) => acc + val);
console.log(united);


const avg = (arr) => {
    let sum = arr.reduce((acc, value) => acc + value)
    return sum / arr.length;
} // pra tirar a media do array


// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers);

const greaterThanFive = numbers.filter((num) => num > 5);
console.log(greaterThanFive);


const products = [
    { name: 'Keyboard', price: 30.0, available: true},
    { name: 'Mouse', price: 64.99, available: false },
    { name: 'Controller', price: 59.8, available: true },
    { name: 'Speakers', price: 43.7, available: false },
];

const availableProducts = products.filter((product) => product.available === true); // === true nao e necessario pq ja vai ser true
console.log(availableProducts);


// Sort
// Sort strings
const namesArray = ['Andre', 'Xico', 'Diogo', 'Carolina'];
namesArray.sort();
console.log(namesArray);

// Sort numbers
unsorted = [12983, 98, 734, 17, 2222]
unsorted.sort((a, b) => a - b); // to sort numbers
console.log(unsorted);

// Pra comparar por ordem alfabetica, e nao maiusculo/minusculo e tb com outros metodos .
const greetings = ['Hey', 'hello', 'Ola', 'oi', 'aloha'];
greetings.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1; // poderia ser .length etc
    if (a.toLowerCase() === b.toLowerCase()) return 0;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
})


// Reverse
greetings.reverse();
console.log(greetings);



// Debugging
// Identify the problem 
// Isolate the source
// Fix the problem, or create a workaround

try {
    // run your code
} catch (error) {
    // handle the error
} finally {
    
}

// return a copy of the original array
// Spread Operator
let greetingsCopy = [...greetings]
greetingsCopy.reverse();
console.log(greetingsCopy);

