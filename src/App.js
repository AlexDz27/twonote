import { useState } from 'react'
import Canvas from './Canvas'
import Header from './Header'

function App() {
  const [mode, setMode] = useState('drawing')

  return (
    <div className="App">
      <Header mode={mode} />
      <Canvas />
    </div>
  )
}

export default App
