// Create canvas, ref 1
// // set width and height
const WIDTH = 900; const HEIGHT = 500;

const ratio = window.devicePixelRatio;
const canvas = document.querySelector('canvas')
canvas.width = WIDTH * ratio;
canvas.height = HEIGHT * ratio;
canvas.style.width = WIDTH + "px";
canvas.style.height = HEIGHT + "px";

// Get context
const ctx = canvas.getContext("2d")
// // idk, but probably scale context for better high-res rendering
ctx.scale(ratio, ratio)

// Logic
// // Setup drawing
const penPosition = {x: 0, y: 0} // initialize it with zero values at first

document.addEventListener('mousemove', draw)
document.addEventListener('mousedown', setPenPosition)
document.addEventListener('mouseenter', setPenPosition);
function draw(e) {
  if (e.buttons !== 1) return; // mouse left button must be pressed

  ctx.beginPath(); // begin

  // Set pen styles
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#c0392b';
  // // make lines more smooth
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round'

  ctx.moveTo(penPosition.x, penPosition.y); // from
  setPenPosition(e);
  ctx.lineTo(penPosition.x, penPosition.y); // to

  ctx.stroke() // draw!
}
function setPenPosition(e) {
  penPosition.x = e.clientX
  penPosition.y = e.clientY
}