
const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
canvas.width = windowWidth;
canvas.height = windowHeight;

let mousex = 0;
let mousey = 0;

// når man ikke kalder addEventListener på et element er det window(global object), som bliver kaldt på
addEventListener("mousemove", function(e) {
    mousex = e.clientX;
    mousey = e.clientY;
  });

  // justerer canvas størrelse, hvis vinduet er blevet mindre/større, og sørger for at canvas er blankt og klar til næste frame
  function updateCanvas() {
    if (windowWidth != window.innerWidth || windowHeight != window.innerHeight) {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      canvas.width = windowWidth;
      canvas.height = windowHeight;
    }
    canvasContext.clearRect(0, 0, windowWidth, windowHeight);
  }
  