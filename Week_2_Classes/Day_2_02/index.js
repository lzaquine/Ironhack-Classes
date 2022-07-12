//NO VAR - LET AND CONST
// NO NAME TWICE

// Scope

// Global scope - Available everywhere including child scopes
let myName = 'Andre'

// Function scope - available inside of that function and any child scopes

// Block scope - available only inside the statement or expression where it was declared


// var
var message = 'Hello from global scope'

function fromLocalScope (){
    var greeting = 'Hello from local scope'
    return greeting;
}

console.log(message);
console.log(greetintg); // vai dar undefined pq a minha var esta dentro da function. se uso o var dentro da function, so tenho acesso a ela dentro.

var message = 'This is a new message'; // vai aparecer essa agora, atualizada. mas nao e recomendado usar de novo porque pode dar erro e podemos nos perder.

console.log(message);

for (var i = 0; i < 30; i++) {
    console.log(`Inside the loop: ${i}`);
}

console.log(`Outside the loop: ${i}`);

// Can't redeclare a variable with let, but we can reasign a value
let myMessage = 'Hello there';
myMessage = 'Hey hey';

let bestTA = 'Xico'

function scope() {
        let bestTA = 'Catarina';
        console.log(bestTA);

    if (true) {
        // block scope
        let bestTA = 'Diogo'
        console.log(bestTA);
}};

scope();
console.log(bestTA);


const obj = {}
obj = {name: 'Ironhacker'} // const nao pode tomar outro valor igual aqui, mas podemos 'trocar' o objeto
obj.name = 'Ironhacker';
console.log(obj);

// Hoisting - on the globalscrope

// var gets hoisted and declared (with undefined)
console.log(newVar); // undefined
var newVar = 'Hey there'

// let and const get hoisted (technically) but with no value
console.log(newLet); // error - can't access before initialization
let newLet = 'Not gonna work';


// js is synchronous but it has asynchronous behaviour

// setTimeout - asynchronous

function someCallbackFunction() {
    console.log('Hello everyone!');
}

const timeoutId = setTimeout(someCallbackFunction, 5000);

someCallbackFunction();
console.log('This will run before');

clearTimeout(timeoutID); // geralmente colocamos em condicoes if ... se algo acontecer, isso acontece

const newTimeoutID = setTimeout(() => {
    console.log('Arrow syntax')
}, 2000)

// loading skeleton - procurar pra saber

// setInterval - repeats the function every x amount of miliseconds

const intervalID = setInterval(callback, delay)

const intervalID = setInterval(() => {
    console.log('1 second')
}, 1000);

if (number > 10) {
    clearInterval(intervalID);
};

// pra nao pensar em trilhoes de milisegundos, posso multiplicar, por exemplo 1000 * 60 * 60 etc

// Value vs Reference

// Primitive values don't change
// Variables poiting to the same primitive value will return true when compared
let price1 = 10.99
let price2 = 10.99 // =price1 
let price 2 = price1; // =price1
price1 = 11 // agora vai ser diferente do price2
console.log(price1 === price2);

// Value by reference
const book1 = { author: 'Irvine Welsh' };
const book2 = book1;

book1.author = 'XxxXxxX';

console.log(book1); // XxxXxxX
console.log(book2); // XxxXxxX

book2.author = 'YyyYyyY';
console.log(book1); // YyyYyyY
console.log(book2); // YyyYyyY

let students = ['Andrea', 'Raquel', 'Matulan', 'Brenda'];
let students2 = ['Andrea', 'Raquel', 'Matulan', 'Brenda'];
let ironhackers = students;

console.log(students === students2); // false

students.push('Jason');

console.log(students);
console.log(ironhackers);


// Copying an object 

let favBook = { title: 'Acid House', author: 'Irvine Welsh' };
let favBookCopy = JSON.parse(JSON.stringify(favBook));

favBook.author = 'Charles Dickens'
console.log(favBook);


// Copying an array

let students = [['Andrea', 'Raquel', 'Matulan', 'Brenda']
                ['Phil', 'John', 'Simao', 'Jason'],
            ];

// Spread operator - creates a Shallow copy
let studentsCopy = [...students];
// Deep copying
let deepCopy = JSON.parse(JSON.stringify(students));

students[0].push('Xico');
console.log(studentsCopy);
console.log(students);
console.log(deepCopy);
