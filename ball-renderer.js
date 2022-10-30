
const gravity = 0.99;

const balls = [];

function createBalls(amountOfBalls) {
for (var i = 0; i < amountOfBalls; i++){
    balls.push(new Ball());
}
}

function renderBalls() {
  
  updateCanvas();

  balls.forEach(ball => {
    renderBall(ball);
    moveBall(ball);
    
    if(mousex > ball.x - 20 && 
      mousex < ball.x + 20 &&
      mousey > ball.y -50 &&
      mousey < ball.y +50 &&
      ball.radius < 70) {
        ball.radius += 5; 
      } 
    else {
      if(ball.radius > ball.startradius){
        ball.radius += -5;
        }}})
 
    requestAnimationFrame(renderBalls);    
}

function renderBall(ball) {
  canvasContext.beginPath();
  canvasContext.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  canvasContext.fillStyle = ball.color;
  canvasContext.fill();
}

function moveBall(ball) {
  ball.y += ball.dy;
  ball.x += ball.dx;
  if (ball.y + ball.radius >= windowHeight) {
    ball.dy = -ball.dy * gravity;
  }
  else {
    ball.dy += ball.vel;
  }    
  if (ball.x + ball.radius > windowWidth || ball.x - ball.radius < 0){
    ball.dx = -ball.dx;
    }
}

createBalls(20);
renderBalls();

// erstatter den ældste bold med en ny bold
setInterval(function() {
  balls.push(new Ball());
  balls.splice(0, 1);
}, 400);
