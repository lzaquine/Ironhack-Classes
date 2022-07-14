const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 880, 500);

// path meio
ctx.strokeStyle = 'white';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(450, 0);
ctx.lineTo(450, 1000);
ctx.stroke();
ctx.closePath();

// bola do meio

ctx.beginPath();
ctx.arc(450, 250, 20, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

// arco do meio

ctx.beginPath();
ctx.arc(450, 250, 75, 0, Math.PI * 2)
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

//meio arco direito
ctx.beginPath();
ctx.arc(112, 250, 50, 0, Math.PI * 1.5, true)
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.arc(112, 250, 50, 0, Math.PI * 0.5)
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

//gol direito
ctx.strokeRect(10, 145, 105, 207)

// gol esquerdo
ctx.strokeRect(790, 145, 105, 207)

//meio arco esquerdo
ctx.beginPath();
ctx.arc(790, 250, 50, Math.PI * 0.5, Math.PI * 1.5);
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

// marca do penal direito
ctx.beginPath();
ctx.arc(60, 250, 5, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

// marca do penal esquerdo
ctx.beginPath();
ctx.arc(840, 250, 5, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

//escanteio ponta direita top
ctx.beginPath();
ctx.arc(1, 1, 50, 0, Math.PI * 1.5);
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

//escanteio ponta esquerda top
ctx.beginPath();
ctx.arc(900, 1, 50, 0, Math.PI * 1.5);
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

//escanteio ponta direito baixo
ctx.beginPath();
ctx.arc(1, 525, 50, Math.PI * 1.5, 0);
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

//escanteio ponta esquerdo baixo
ctx.beginPath();
ctx.arc(900, 525, 50, 0, Math.PI * 2);
ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.stroke();
ctx.closePath();

// marca do escanteio esquerdo
ctx.beginPath();
ctx.arc(890, 510, 6, 0, Math.PI * 2);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();