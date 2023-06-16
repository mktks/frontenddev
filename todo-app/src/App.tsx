import React, { useEffect, useState } from "react"
import { TextBox } from "./components/TextBox/TextBox"
import { Button } from "./components/Button/Button"

function App() {
  const [inputText, setInputText] = useState("")

  useEffect(() => {
    console.log("inputTextが変わりました。", inputText)
  }, [inputText])

  return (
    <div className="App">
      <div className="input-container">
        <TextBox inputText={inputText} onChange={(value) => setInputText(value)} />
        <Button
          onClick={() => {
            console.log("追加ボタンがクリックされました")
          }}
          text="追加"
        />
      </div>
    </div>
  )
}

export default App
