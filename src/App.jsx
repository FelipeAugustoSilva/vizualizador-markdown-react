import { useState, useEffect, useRef } from 'react'
import Toolbar from "./components/Toolbar.jsx";

import { marked } from 'marked';

function App() {
  const [text, setText] = useState(localStorage("markdownText") || "# Olá, eu sou feito de markdown")

  const renderText = () => {
    return { __html: marked(text)};
  };

  const textAreaRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("markdownText", text)
  }, [text])
  return (
    <div className="app-container">
      <Toolbar />
      <textarea ref={textAreaRef} value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <div dangerouslySetInnerHTML={renderText()} />
    </div>
  )
}

export default App
