const canvas = document.getElementById('heartCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart(x, y) {
  const heart = {
    x,
    y,
    size: Math.random() * 5 + 2,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
    alpha: 1,
  };
  hearts.push(heart);
}

function drawHeart(heart) {
  ctx.beginPath();
  ctx.moveTo(heart.x, heart.y);
  ctx.bezierCurveTo(
    heart.x - heart.size, heart.y - heart.size,
    heart.x - heart.size, heart.y + heart.size,
    heart.x, heart.y + heart.size * 2
  );
  ctx.bezierCurveTo(
    heart.x + heart.size, heart.y + heart.size,
    heart.x + heart.size, heart.y - heart.size,
    heart.x, heart.y
  );
  ctx.closePath();
  ctx.fillStyle = 'rgba(255, 0, 0, ' + heart.alpha + ')';
  ctx.fill();
}

function updateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = hearts.length - 1; i >= 0; i--) {
    const heart = hearts[i];
    heart.x += heart.speedX;
    heart.y += heart.speedY;
    heart.alpha -= 0.01;
    if (heart.alpha <= 0) {
      hearts.splice(i, 1);
    } else {
      drawHeart(heart);
    }
  }
  requestAnimationFrame(updateHearts);
}

canvas.addEventListener('click', (e) => {
  createHeart(e.clientX, e.clientY);
});

updateHearts();
const typingText = document.getElementById('typingText');
let index = 0;

function type() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}

type();
