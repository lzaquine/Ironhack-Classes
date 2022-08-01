// Target the canvas and get the context

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

// Rectangles
// fillRect, strokeRect, clearRect
/* ctx.fillStyle = 'purple';

// x, y, width, height
//ctx.fillRect(x, y, width, height);
// ctx.fillRect(50, 50, 200, 200);

function draw() {
    ctx.fillRect(25, 25, 100, 100)
    ctx.clearRect(45, 45, 60, 60)
    ctx.strokeRect(50, 50, 50, 50)
}
// draw();

// Paths 
// beginPath, stroke, fill, closePath, moveTo, lineTo

ctx.beginPath();
ctx.moveTo(300, 50);
ctx.lineTo(450, 50);
ctx.stroke();
// ctx.moveTo(450, 50);
ctx.lineTo(450, 450);
ctx.stroke();
ctx.closePath();

// Triangle
ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();
ctx.closePath();


// Arcs
// arc, arcTo

ctx.beginPath();
// ctx.arc(x, y, radius, startingAngle, endAngle); // optional parameter (anticlockwise , vai ser true ou false);
// radians
// Math.PI / 180 * degrees (we want)
// for ex: if we want 90degrees, (Math.PI/180) * 90
//rawing the arc
ctx.arc(150, 170, 75, 0, Math.PI * 2);
// specifying the width of the stroke line
ctx.lineWidth = 20;
// changing the color of the stroke to green
ctx.strokeStyle = 'green';
// finally we stroke the path
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 170, 35, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

// fillStyle - change the color of the fill
// strokeStyle - change the color of the stroke
ctx.fillStyle = '';
ctx.strokeStyle = '';

// text
ctx.fillText = '';
ctx.font = '';
ctx.fillText('Hello World', 480, 50);
ctx.font = '48px asns-serif';
ctx.strokeText('Hello world', 400, 200); */

// Images
const blockImg = new Image();
blockImg.addEventListener('load', function (){ //why did he use function and not =>?
    //ctx.drawImage(image, x, y, width, height)
    ctx.drawImage(blockImg, 0, 0, 50, 50);
});
blockImg.src = './images/block.jpeg';

let blockX = 0;
let blockY = 0;

function draw() {
    ctx.clearRect(0, 0, 900, 600);
    ctx.drawImage(blockImg, blockX % 900, blockY, 50, 50);
    blockX += 3;
}

/* setInterval(() => {
    draw();
}, 30); */

// pattern

function drawPattern (){
    let blockPattern = ctx.createPattern(blockImg, 'repeat');
    ctx.fillStyle = blockPattern;
    ctx.fillRect(0, 0, 900, 550);
}
setTimeout(() => {
    drawPattern();
}, 100); 

// Animation
// Repeat the drawing
// Clear the canvas before every draw

/* const color = {
    red: Math.floor(Math.random() * 255 + 1),
    green: Math.floor(Math.random() * 255 + 1),
    blue: Math.floor(Math.random() * 255 + 1),
    rgb: function() {
        return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }
};
// console.log(color.rgb);

function updateCanvas() {
    color.red = (color.red + 1) % 255;
    color.green = (color.green + 1) % 255;
    color.blue = (color.blue + 1) % 255;

    ctx.clearRect(0, 0, 900, 600);
    ctx.fillStyle = color.rgb();
    ctx.fillRect(0, 0, 900, 600);
    requestAnimationFrame(updateCanvas);
} */
//updateCanvas();

// requestAnimationFrame
/*
let speed1 = 0;
let speed2 = 0;
let speed3 = 0;

function drawSquare(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCanvas() {
    //clear the canvas
    ctx.clearRect(0, 0, 900, 600);

    //increase the speed
    speed1 += 10;
    speed2 += 2;
    speed3 += 3;

    //draw the squares
    drawSquare(speed1 % 900, 50, 100, 100, 'red');
    drawSquare(speed2, 150, 100, 100, 'green');
    drawSquare(speed3, 250, 100, 100, 'yellow');

    requestAnimationFrame(drawCanvas)
}
// drawCanvas();


class Pokemon {
    constructor() {
        this.x = 25;
        this.y = 25;

        const img = new Image()
        img.addEventListener('load', () => {
            this.img = img
            this.draw()
        })
        img.src = "./images/image-723779.png";
    }

    moveUp() {
        this.y -= 25;
    }
    moveDown() {
        this.y += 25;
    }
    moveRight() {
        this.x += 25;
    }
    moveLeft() {
        this.x -= 25;
    }
    reset() {
        this.x = 25;
        this.y = 25;
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, 50, 50);
    }
}

const caterpie = new Pokemon();

document.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowUp':
            caterpie.moveUp();
            break;
        case 'ArrowDown':
            caterpie.moveDown();
            break;
        case 'ArrowLeft':
            if(caterpie.x >= 5) {
                caterpie.moveLeft();
            }
            break;
        case 'ArrowRight':
            caterpie.moveRight();
            break;
        case 'Space':
            caterpie.reset()
            break;
    }
    pokemonCanvas();
});

function pokemonCanvas() {
    ctx.clearRect(0, 0, 900, 600);
    ctx.fillText('Caterpie X' + caterpie.x, 700, 100);
    ctx.fillText('Caterpie Y' + caterpie.y, 700, 200);

    caterpie.draw();
}

pokemonCanvas(); */