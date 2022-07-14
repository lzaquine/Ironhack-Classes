const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

let speed1 = 900;
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
  if (speed1 < -100) speed1 = 900;
  speed1 -= 3;
  speed2 += 5;
  speed3 += 5;

  //draw the squares
  drawSquare(speed1, 0, 100, 100, 'red');
  drawSquare(0, speed2 % 600, 100, 100, 'green');
  drawSquare(speed3 % 900, speed3 % 600, 100, 100, 'yellow');

  requestAnimationFrame(drawCanvas);
}

//drawCanvas();