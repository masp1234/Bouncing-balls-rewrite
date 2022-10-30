
class Ball {

  constructor() {
      this.color = this.randomColor();
      this.radius = Math.random() * 20 + 14;
      this.startradius = this.radius;
      this.x = Math.random() * (windowWidth - this.radius * 2) + this.radius;
      this.y = Math.random() * (windowHeight - this.radius);
      this.dy = Math.random() * 2;
      this.dx = Math.round((Math.random() - 0.5) * 10);
      this.vel = Math.random() /5;
  }
  randomColor() {
      return (
        "rgba(" +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.round(Math.random() * 250) +
        "," +
        Math.ceil(Math.random() * 10) / 10 +
        ")"
      );
    }
}