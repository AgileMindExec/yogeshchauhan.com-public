var canvas = document.getElementById("canvas");
var canvasObject = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var pos = {
  x: 100,
  y: 100,
};
var numberOfBalls = 20;

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.radius = Math.floor(Math.random() * 25);
    this.color = randomColor();
    this.dx = Math.floor(Math.random() * 5 + 1);
    this.dy = -Math.floor(Math.random() * 5 + 1);
  }

  drawBall() {
    canvasObject.beginPath();
    canvasObject.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    canvasObject.fillStyle = this.color;
    canvasObject.fill();
    canvasObject.closePath();
  }

  updateBall() {
    if (
      this.pos.x + this.dx > canvas.width - this.radius ||
      this.pos.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }
    if (
      this.pos.y + this.dy > canvas.height - this.radius ||
      this.pos.y + this.dy < this.radius
    ) {
      this.dy = -this.dy;
    }
    this.pos.x += this.dx;
    this.pos.y += this.dy;
    canvasObject.beginPath();
    canvasObject.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    canvasObject.fillStyle = this.color;
    canvasObject.fill();
  }
}

function randomColor() {
  const rc1 = Math.random() * 16777215;
  const rc2 = Math.floor(rc1);
  const rc3 = rc2.toString(16);
  return "#" + rc3;
}

function randomPos() {
  pos = {
    x: Math.floor(Math.random() * canvas.width),
    y: Math.floor(Math.random() * canvas.height),
  };
  return pos;
}

var balls = [];

for (let index = 0; index < numberOfBalls; index++) {
  balls.push(new Ball(randomPos()));
  balls[index].drawBall();
}

setInterval(function () {
  canvasObject.clearRect(0, 0, canvas.width, canvas.height);
  for (let index = 0; index < numberOfBalls; index++) {
    balls[index].updateBall();
  }
}, 10);
