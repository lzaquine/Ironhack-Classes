// Declaration
/* function functionName(parameters) {
    // operation
    return something;
}

// Invocation
functionName(arguments)

 */

function sayHello(name) {
    console.log(`Hello there ${name}`);
}
sayHello('Xico');


function sayBye(name) {
    console.log(`Bye ${name}`);
}
sayBye('Xico');

function upperCase(name) {
    console.log(`${name.toUpperCase()}`);
}
upperCase('Xico');

function test(name, age) {
    console.log(`My name is ${name}, and I'm ${age} years old.`);
}
test('Xico', 20);
test('Lucas', 26);
test('Andre', 28);

function returning() {
    return 1 + 1;
}
console.log(returning());

// Pure function
function sum(a, b) {
    return a + b;
}

let mySum = sum(10, 12)
console.log(mySum)

// Returning Conditionally
function getName(name) {
    if (name.lenght === 0){
        return `Please write a name`
    } else {
    return `Name is ${name}`;
    }
}

console.log(getName(''));
console.log(getName('Gui'));


// Returning multiple values with an object
function getUserInfo(name, age, email){
    let userInfo = {
        firstName: name,
        userAge: age,
        userEmail: email
    }

    return userInfo;
}

let users = getUserInfo('Xico', 200, 'naosei@exemplo.teste');
console.log(users);
console.log(getUserInfo('Xico', 20, 'xico@xico.xico'));


// Returning multiple values with an array

function catchEm(poke1, poke2, poke3) {
    const dex = [
        poke1, poke2, poke3
    ]
    return dex;
}

const miguelDex = catchEm('Pikachu', 'Charmander', 'Snorlax');
console.log(miguelDex);
console.log(catchEm('ExemploUm', 'DoisExemplo', 'ExemploTres'));

// Arrays

let myArray = ['Hello', true, 89, {}, []]
const emptyArray = []

let namesArray = ['Andre', 'Karina', 'Xico'];
console.log(namesArray[2]);

// Array Methods

// push (to the end of the array)
namesArray.push('Gui')
console.log(namesArray);

// unshift (add to the begining of the array)
namesArray.unshift('Diogo')
console.log(namesArray);

// pop (takes out the last element of the array)
namesArray.pop();
console.log(namesArray);

//shift (takes out the first element of the array)
namesArray.shift();
console.log(namesArray);

//splice
// first argument - starting index
// second argument - number of items to cut
namesArray.splice(0, 1);
console.log(namesArray);

// forEach
namesArray.forEach(function (name){
    console.log(name);
});

namesArray.forEach((name) => name);

namesArray.forEach(function (element, index){
    console.log(`${element} will take seat ${index}`);
});

let longString = "Exemplo um Dois Exemplo Um dois Exemplo Tres quatro Exemplo tres Quatro Exemplo cinco Seis."

let words = longString.split(" ");
console.log(words);

let email = 'xico@ironhack.com';
let firstEmail = email.split('@');
console.log(firstEmail[0]);


// Objects

let emptyObj = {}
let myObj = {
    key: 'value',
    key: 'value',
};
let myObj2 = {
    names: ['Andre', 'Xico'],
    age: 28,
    isTeaching: true,
};

const myStore = {
    keyboard: 30.99,
    mouse: 15,
    screen: 'Not available!',
};

// dot notation
console.log(myStore.mouse);

// bracket notation
console.log(myStore['mouse']);

// inserting with dot notation
myStore.laptop = 1000;
console.log(myStore);

// inserting with bracket notation
myStore['cellphone'] = 500;
console.log(myStore);

// in operator
console.log('keyboard' in myStore);
console.log('boat' in myStore);

// update
myStore.laptop = 2000;
console.log(myStore);

// delete
delete myStore.cellphone;
console.log(myStore);

// Iterate over an object

// Object.keys - returns an array with all the keys
console.log(Object.keys(myStore));

// Object.values - returns an array with all the values
console.log(Object.values(myStore));

// for in 


for (let product in myStore) {
    console.log(product); // product e um placeholder, poderia ser qualquer coisa
}

for (let product in myStore) {
    console.log(myStore[product]);
}

// Matrix / Two-dimensional array

const twoDimensional = [
    ['Pikachu', 'Raichu'],
    ['Squirtle', 'Totodile'],
];

console.log(twoDimensional[0][1]);



const company = [
    [
        {name: 'Terry Little', email: 'ipfepuh@cepavkav.in'},
        {name: 'Mattie Peters', email: 'mu@haeh.am'},
        {name: 'Louise Bennett', email: 'wo@va.ro'},
    ],
    [
        {name: 'Jane Carpenter', email: 'javaldu@cuj.lc'},
        {name: 'Tommy Conner', email: 'wajovbup@vare.se'},
        {name: 'Effie Reid', email: 'vewoha@le.ml'},
    ],
    [
        {name: 'Derrick Snyder', email: 'rapcaf@uti.th'},
        {name: 'Bobby Martinez', email: 'uho@keebu.bz'},
        {name: 'Josephine Santos', email: 'ona@egites.bi'},
    ],
]
console.log(company[1][1].email);
console.log(company[2][1].name);