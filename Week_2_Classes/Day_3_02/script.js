// get by ID

let branchDiv = document.getElementById('branch');

console.log(branchDiv);

// innerHTML

branchDiv.innerHTML = 'This is a branch';
// branchDiv.innerHTML = '<p>Hello there</p>';

branchDiv.style.border = '4px solid brown';
branchDiv.style.margin = '20px';
branchDiv.style.backgroundColor = 'green';

const changeColor = (element) => {
    if (element.style.backgroundColor === 'green') {
        element.style.backgroundColor = 'yellow'
    } else {
        element.style.backgroundColor = 'green'
    }
};

setInterval(changeColor, 1000, branchDiv);

// get class by name

let leaves = document.getElementsByClassName('leaf');
console.log(leaves);

const randomNumbers = () => {
    for (let i = 0; i < leaves.length; i++) {
        leaves[i].innerHTML = Math.floor(Math.random() * 10) + 1;
    }
};

setInterval(randomNumbers, 1000);

// get by tag name
// returns an array-like object

let divs = document.getElementsByTagName('div'); // <- also returns an array-like object
console.log(divs);
// let bodyTag = document.getElementsByTagName('body')[0];
// console.log(bodyTag);

// ---------------------------------- CAT IMG ----------------------------------
let imgs = document.getElementsByClassName('imgcat')[0];
console.log(imgs);

imgs.style.width = '500px';
const moveImg = (el) => {
    if (el.style.width === '500px') {
        el.style.width = '250px'
    } else {
        el.style.width = '500px'
    }
};
setInterval(moveImg, 500, imgs);
// ---------------------------------- CAT IMG ----------------------------------

//querySelector
// returns the first element with the specified query
let firstLeaf = document.querySelector('.leaf');
console.log(firstLeaf);

//querySelectorAll
// returns an array of all elements that fulfill the criteria
let allDivs = document.querySelectorAll('.leaf, #branch');
console.log(allDivs);

// Classname - to read the class
let twigDiv = document.querySelector('.twig');
console.log(twigDiv.className)

// classList - add(), remove(), toggle()

twigDiv.classList.add('leaf'); // adds a class to the element
twigDiv.classList.toggle('twig'); // toggle(take it out) the twig class (because it was there before)
twigDiv.classList.toggle('fruit'); // toggle (add) the fruit class (because it wasn't there before)
twigDiv.classList.remove('leaf'); // removes the class
console.log(twigDiv.className);

console.log(branchDiv.id); // nao e tao util por agora
