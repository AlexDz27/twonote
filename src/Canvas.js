import { useEffect, useRef } from 'react'
import { makeCanvasHighResolution } from './functions/makeCanvasHighResolution'

function Canvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    makeCanvasHighResolution(canvasRef)
  }, [])

  return <canvas ref={canvasRef} />
}

export default Canvas