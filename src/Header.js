function Header({ mode, setMode, pen, setPen }) {
  return (
    <header className="header">
      Mode: 
      <label><input checked={mode === 'drawing'} type="radio" name="mode" onChange={() => setMode('drawing')} /> drawing</label>
      <label><input checked={mode === 'writing'} type="radio" name="mode" onChange={() => setMode('writing')} /> writing</label>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

      <span style={mode === 'writing' ? {opacity: 0.5, cursor: 'not-allowed'} : {}}>
        Pen:
        <label style={mode === 'writing' ? {cursor: 'not-allowed'} : {}}><input disabled={mode === 'writing'} style={mode === 'writing' ? {cursor: 'not-allowed'} : {}} checked={pen === 'red'} type="radio" name="pen" onChange={() => setPen('red')} /> red</label>
        <label style={mode === 'writing' ? {cursor: 'not-allowed'} : {}}><input disabled={mode === 'writing'} style={mode === 'writing' ? {cursor: 'not-allowed'} : {}} checked={pen === 'eraser'} type="radio" name="pen" onChange={() => setPen('eraser')} /> eraser</label>
      </span>
    </header>
  )
}

export default Header