import { useState } from 'react'
import Canvas from './Canvas'
import Header from './Header'

function App() {
  const [mode, setMode] = useState('drawing')
  const [pen, setPen] = useState('red')

  return (
    <div className="App">
      <Header
        mode={mode} setMode={setMode}
        pen={pen} setPen={setPen}
      />
      <Canvas />
    </div>
  )
}

export default App
