import { useState, useEffect, useRef } from 'react'
import Toolbar from "./components/Toolbar.jsx";

function App() {
  const [text, setText] = useState("# Olá, eu sou feito de markdown")

  return (
    <div className="app-container">
      <Toolbar />
      <textarea></textarea>
      <div></div>
    </div>
  )
}

export default App
