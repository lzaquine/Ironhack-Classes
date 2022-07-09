// OOP

//Monopoly Game
const squares = [100 , -10, 0, 0, -40, 10, 0, -10, -10, 0, 50, -20];

let dice;

let player1 = {
    name: 'Majid',
    color: 'red',
    position: 0,
    cash: 1000
}
let player1 = {
    name: 'Luis',
    color: 'green',
    position: 0,
    cash: 1000
}
let player1 = {
    name: 'Andrea',
    color: 'yellow',
    position: 0,
    cash: 1000
}

//pra rodar o dado
dice = Math.floor(Math.random() * 6) + 1;


//player1 move
dice = Math.floor(Math.random() * 6) + 1;
player1.position = (player1.position + dice) % squares.length;

player1.cash += squares[player1.position]

if(player1.cash <= 0) {
    console.log(`Game over for ${player1.name}`);
}


//player2 move
dice = Math.floor(Math.random() * 6) + 1;
player2.position = (player2.position + dice) % squares.length;

player2.cash += squares[player2.position]

if(player2.cash <= 0) {
    console.log(`Game over for ${player2.name}`);
}


//player3 move
dice = Math.floor(Math.random() * 6) + 1;
player3.position = (player3.position + dice) % squares.length;

player3.cash += squares[player3.position]

if(player3.cash <= 0) {
    console.log(`Game over for ${player3.name}`);
}



//Monopoly Game -- Improved version
const squares = [100 , -10, 0, 0, -40, 10, 0, -10, -10, 0, 50, -20];

let dice;

let player1 = {
    name: 'Majid',
    color: 'red',
    position: 0,
    cash: 1000
    move(){
        dice = Math.floor(Math.random() * 6) + 1;
        player1.position = (player1.position + dice) % squares.length;

        player1.cash += squares[player1.position]

        if(player1.cash <= 0) {
        console.log(`Game over for ${player1.name}`);
        }

    },
    displayInfo(){
        console.log(`${player1.name} is in position ${player1.position}, with ${player1.cash}`)
    },
};
let player1 = {
    name: 'Luis',
    color: 'green',
    position: 0,
    cash: 1000
}
let player1 = {
    name: 'Andrea',
    color: 'yellow',
    position: 0,
    cash: 1000
}

//pra rodar o dado
dice = Math.floor(Math.random() * 6) + 1;


//player1 move

//player2 move
dice = Math.floor(Math.random() * 6) + 1;
player2.position = (player2.position + dice) % squares.length;

player2.cash += squares[player2.position]

if(player2.cash <= 0) {
    console.log(`Game over for ${player2.name}`);
}


//player3 move
dice = Math.floor(Math.random() * 6) + 1;
player3.position = (player3.position + dice) % squares.length;

player3.cash += squares[player3.position]

if(player3.cash <= 0) {
    console.log(`Game over for ${player3.name}`);
}



// Moving the players

player1.move()



for (let i = 0; i <= 10; i++) { // pra jogar 10x por exemplo. posso colocar 100, 1000 vezes trocando o 10
    player1.move()
    player2.move()
    player3.move()
}

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()


// this
// podemos usar o this no lugar da variante, por ex
dice = Math.floor(Math.random() * 6) + 1;
// player2
this.position = (this.position + dice) % squares.length;

this.cash += squares[this.position]

if(this.cash <= 0) {
    console.log(`Game over for ${this.name}`);
}


//class
class Player {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.position = 0;
        this.cash = 1000;
    }

    move(){
        dice = Math.floor(Math.random() * 6) + 1;
        player1.position = (player1.position + dice) % squares.length;

        player1.cash += squares[player1.position]

        if(player1.cash <= 0) {
        console.log(`Game over for ${player1.name}`);
        }
    }

    displayInfo(){
        console.log(`${player1.name} is in position ${player1.position}, with ${player1.cash}`)
    }
}

let player1 = new Player('Majid', 'red')
let player2 = new Player('Luis', 'green')
let player3 = new Player('Andrea', 'yellow')

//calling new triggers the constructor and creates the object
/* player1 = {}
player1.name = 'Majid'
player1.color: 'red',
player1.position: 0,
player1.cash: 1000 */

player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

//Abstraction -- ^

class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound)
    }


}

let randomAnimal = new Animal('Bubles', 'grey', 'meow')

// Inheritance

class Cat extends Animal {
    constructor(name, color, sound, isAsleep) {
        // refers to the properties of the parent class
        super(name, color, sound);
        // here we declare the new properties
        this.isAsleep = isAsleep;
    }

    changeAwake() {
        this.isAsleep = !this.isAsleep;
    }
}

let garfield = new Cat('Garfield', 'orange', 'hmmmm', false);

garfield.changeAwake();
console.log(garfield);
garfield.makeSound();


class Penguin extends Animal {
    constructor(name, fishCaught) {
        super(name, 'black and white', 'Pardon, excuse me!')
        this.fishCaught = fishCaught
    }
}

let happy = new Penguin('Happy Feet', 7);

happy.makeSound();
console.log(happy);

// 4 pillars of OOP - Object Oriented Programming

// Inheritance - Extending a class into additional ones

//Abstraction - Hide the way the methods and functions work

// Polymorphism - changing the functionality of an inherited method

// Encapsulation - Grouping data and methods that belong together