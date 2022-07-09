// create an object called library that has a property shelf which is an empty array
// create a addBook method that receives a title as an argument (it will be a string), and adds it to the shelf array
// create a printLibrary method that prints all the books in the shelf
// BONUS: print the books in a single string separated by a comma and a space


let library = {
    shelf: [],
    addBook(title){
        this.shelf.push(title)
    },
    printLibrary(){
        console.log(this.shelf.join(', ')); // this.shelf so pras arrays, mas .join pra string com , e espaco
    },
};
library.addBook('title')
library.addBook('exm')
library.addBook('okaa')
library.printLibrary();


// create a whale class that extends animal
// all same variables and + property - eaten which is an empty array []
// create a method called eat(food) that accepts a string (food por exemplo), and adds that food to the eaten array. it also makes the whale sound

// create a new whale called moby, white, Yum!
// make the whale eat Ahab and Pequod (separately)


class Whale extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound)
        this.eaten = []
    }
    makeSound() {
        console.log(this.sound.toUpperCase());
    }
    eat(food) {
        this.eaten.push(food)
        this.makeSound()
    }
}

let moby = new Whale('Moby', 'White', 'Yum!');

moby.eat('Ahab');
moby.eat('Pequod');
console.log(moby);