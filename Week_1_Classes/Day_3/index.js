/* 
Multi line
comments
*/

// Single line comment

// Declaration

let welcome;

// Initialization

welcome = "Hello there";

// Declare and initialize at the same time

let greeting = "Hello Ironhacker";

console.log(welcome, typeof welcome); // Hello there string

welcome = true;

console.log(welcome, typeof welcome); // true boolean

const city = "Lisbon";

// Data types

// Strings
// Numbers
// Booleans
// Null
// Undefined
// Symbol (not used)

// Numbers

let age = 28;
let price = 10.99;

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 ** 2);

age += 1;
console.log(age); // 29

// Methods

// 3.2
// 14.99

//Math.floor() rounds down
console.log(Math.floor(3.2)); // 3
console.log(Math.floor(14.99)); // 14

//Math.ceil() rounds up
console.log(Math.ceil(3.2)); // 4
console.log(Math.ceil(14.99)); // 15

//Math.round() rounds to the nearest integer
console.log(Math.round(3.2)); // 3
console.log(Math.round(14.99)); // 15

let anyNumber = 5.67854667;

let roundToOne = Math.round(anyNumber * 10) / 10; // 5.7
let roundToTwo = Math.round(anyNumber * 100) / 100; // 5.68

console.log(roundToOne);
console.log(roundToTwo);

let newRounded = anyNumber.toFixed(1);
console.log(newRounded); // 5.7

let newRounded = anyNumber.toFixed(1);
console.log(newRounded, typeof newRounded); // 5.7 string -- transforma o numero em uma string

let newRounded = Number(anyNumber.toFixed(1));
console.log(newRounded, typeof newRounded); // 5.7 number

//Math.random gives us a random number between 0 (inclusive) and 1 (excluded)
console.log(Math.random()); // diferentes valores entre 0 e 1 (nao incluso)

// Se eu quiser um numero entre 0 e sei la quantos, 100 por exemplo, tenho que multiplicar pelo valor. Ex:
console.log(Math.random() * 100); // aqui recebo um valor entre 0 e 100 (nao incluso)

// Math.max() and Math.min()
console.log(Math.max(2, -8, 19, 7, 10)); // me da o maior numero, no caso, 19
console.log(Math.min(2, -8, 19, 7, 10)); // me da o menor numero, no caso, -8

//Math.pow
console.log(Math.pow(2, 3)); // 2 ** 3

// Strings

let firstName = "Xico";
let lastName = "Duarte";

// Old way - string concatenation
let oldMessage = "Hello " + firstName + " " + lastName + "!";
console.log(oldMessage); // Hello Xico Duarte!

// New way - string interpolation
let newAge = 20;

let newMessage = `Hello ${firstName} ${lastName}, are you ${newAge} years old?`;
console.log(newMessage); // Hello Xico Duarte!

let book = 'I love "Lord of the Rings" '; // nao usar! usar ' ' para criar a string e " " dentro. ai nao vai precisar do \
let word = "I'm";

// length - property of string (doesn't need () in front)
console.log(firstName.length); // 4
console.log(book.length); // 26

let longString = "This is a long message";

console.log(longString.charAt(2)); // i
console.log(longString.charAt(0)); // T

// Bracket notation
console.log(longString[2]); // i
console.log(longString[0]); // T

let message = "It's not this and it's not that";

console.log(message.indexOf("s")); // 3 -- indexOf me da o primeiro que encontra. precisamos usar '' "" pra funcionar
console.log(message.indexOf("this")); // 9 -- me da a posicao inicial da palavra
console.log(message.indexOf("not", 10)); // 23 -- se eu colocar algum numero do lado, comeca a contar pelo numero, entao tudo oq vem antes nao e contado mas o numero continua o mesmo, no caso 23 e nao 13
console.log(message.lastIndexOf("not")); // 23
console.log(message.lastIndexOf("t")); // 30

// let userInfo = "[FTLIS072022]";

let review = "⭐️".repeat(5);
console.log(review);
// Method Repeat
console.log("ah".repeat(3)); // ahahah
console.log("⭐️".repeat(5)); // ⭐️⭐️⭐️⭐️⭐️

let myMessage = "Hey there, how are you?";

console.log(myMessage.substring(0, 3)); // Hey -- comeca a contar no 0 e para no 3
console.log(myMessage.substring(11, 14)); // how -- comeca a contar no 11 e para no 14

let cutString = myMessage.substring(11, 14);
console.log(cutString); // how
console.log(myMessage); // Hey there, how are you? -- continua igual

let slicedString = myMessage.slice(11, 14);
console.log(slicedString); // how

// !! a diferenca entre slice e string e que slice aceita valores negativos !!

let slicedString = myMessage.slice(-4, -1);
console.log(slicedString); // you

// Locale Compare
console.log("age".localeCompare("bonus")); // -1 -- pq bonus vem depois de age
console.log("age".localeCompare("age")); // 0 -- pq age = age
console.log("bonus".localeCompare("age")); // 1 -- pq age vem antes do bonus
console.log("2".localeCompare("10000")); // 1 -- pq 1 vem antes do 2, nao importa o tamanho da string, ele so compara o primeiro character
console.log("age".localeCompare("Age")); // -1 -- pq minusculo vem antes

// toLowerCase
let capitalString = "HELLO THERE";
console.log(capitalString.toLowerCase());
console.log("age".localeCompare(capitalString.toLowerCase()));

const str = "To be or not to be, that is the question.";

// startsWith
console.log(str.startsWith("To")); // true
console.log(str.startsWith("to")); // false -- importa se ta em maiusculo ou minusculo
console.log(str.startsWith("to be", 19)); // false

// endsWith
console.log(str.endsWith("question")); // false
console.log(str.endsWith("question.")); // true
console.log(str.endsWith(".")); // true

// includes
console.log(str.includes("that")); // true
console.log(str.includes(" n")); // true
console.log(str.includes("?")); // false
console.log(str.includes(" ")); // true
console.log(str.includes("To", 1)); // false

// Boolean

let a = true;
let b = false;

// Operators

// OR || - if at least one of the expressions is true, it returns true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(false || 10 > 1); // true -- mesma coisa que escrever true no lugar do 10 > 1 pq 10 e maior que 1
console.log(true || false || false || false || false); // true -- short-circuit

// AND && - Will return true if ALL expressions evaluate to true
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false
console.log(true && 10 > 1); // true
console.log(false && true && true && true && true); // false -- short-circuit

// Not
console.log(!true); // false
console.log(!false); // true
console.log(!(10 > 1)); // false

// Undefined
let user;
console.log(user); // undefined

// Null
let username = null;
console.log(username); // null

// Thruthy and Falsy values

if (true && 234 && "0" && "false" && {} && []) {
  // {} e [] sao considerados true
  console.log("These are all thruthy"); // vai aparecer pq sao todos true
}

if (false || 0 || "" || undefined || null || NaN) {
  console.log("These are all falsy"); // nao vai aparecer nada pq sao tds false e como e if, algum teria q ser true
}

if (!(false || 0 || "" || undefined || null || NaN)) {
  console.log("These are all falsy"); // vai aparecer por causa do !
}

// Immutability - can't be changed

let campus = "Lisbon";
campus = "Barcelona";
console.log(campus); // Barcelona

let campus = "Lisbon";
campus[0] = "F";
console.log(campus); // Lisbon

// !! Geralmente perguntam em entrevistas !! IMPORTANTE
let x = 1;
let y = x;
console.log(y); // 1
x = 2;
console.log(y); // 1 -- nao quer dizer que o y sempre vai ter o mesmo valor do x, so que tomou o valor do x. depende da ordem. se x = 2 estivesse antes do consolelog do y, mas ainda assim dps do x = 1, o valor seria 2 pela ordem

// Conditionals Loop

// if

if (true) {
  // vai rodar o codigo
}

const someAge = 100;
if (someAge <= 16) {
  console.log("You get a junior discount"); // false | runs if -if- returns true
} else if (someAge >= 65) {
  console.log("You have a senior discount"); // true | only runs if -if- returns false
} else {
  console.log("No discount for you"); // false | only runs if -if- and -else if- returns false
}

const first = 10;
const second = 20;

if (first === second) {
  console.log("Equal number"); // returns
}

const first = 10;
const second = "10";

if (first === second) {
  console.log("Equal number"); // won't return
}

const first = 10;
const second = "10";

if (first == second) {
  console.log("Equal number"); // returns porque usamos o == e nao ===. entao ele transforma a string '10' em um numero
} else {
  if (first > second) {
    console.log("First is greater");
  } else {
    console.log("Second is greater");
  }
}


const pokemon = 'Pikachu';
let type = ' ';

switch(pokemon) {
    case 'Pikachu':
        type = 'Electric';
        break;
    case 'Charmander':
        type = 'Fire';
        break;
    case 'Squirtle':
    case 'Totodile':
    case 'Mudkip':
        type = 'Water';
        break;

    default:
        type = 'Other'; // it'll apply if none of these cases are true
}

console.log(`${pokemon} is of type ${type}`); // Pikachu is of type Electric


/* let number = 10

switch(number) {
    case number > 5:
        console.log('Greater than five');
        break;
    case number < 20:
        console.log('Less than twenty');
} */


// While Loop
let count = 0;
while (count <= 100) { // while (true) roda ate o final. se alguma hr chegar a falso termina.
    console.log(count); // vai contar de 0 a 100
    count++;
}

// for loop
for (let i = 0; i <= 100; i++) {
    console.log(i); // vai contar de 0 a 100
}

// for of loop
let lisbonCampus = "Heden Santa Apolonia";
for (value of lisbonCampus) {
    console.log(value); // vai mostrar todas as letras, cada uma por vez, por causa do of
}

// Continue & break
let count3 = 0;

while(count3 <= 5) {
    count3++;
    console.log(count3);
    if (count3 === 3) {
        break;
    }
} // vai ate o 2. 0 1 2

let count3 = 0;

while(count3 <= 5) {
    count3++;
    if (count3 === 3) {
        continue;
    }
    console.log(count3);
} // vai pular o 3. 1 2 4 5 6. mostra o 6 pq conta e dps vai ao console.log


// Modulus operator / Remainder
console.log(11 % 10); // 1
console.log(12 % 10); // 2
console.log(10 % 10); // 0
console.log(20 % 10); // 0
