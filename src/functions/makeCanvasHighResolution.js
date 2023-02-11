export function makeCanvasHighResolution(canvasRef) {
  const WIDTH = 900; const HEIGHT = 500; // set width and height
  const ratio = window.devicePixelRatio
  const canvas = canvasRef.current
  canvas.width = WIDTH * ratio
  canvas.height = HEIGHT * ratio
  canvas.style.width = WIDTH + "px"
  canvas.style.height = HEIGHT + "px"

  const ctx = canvas.getContext("2d")
  // idk, but probably do the work of scaling context for better high-res rendering
  ctx.scale(ratio, ratio)
}