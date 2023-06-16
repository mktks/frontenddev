import React from "react"
import { TextBox } from "./components/TextBox/TextBox"
import { Button } from "./components/Button/Button"

function App() {
  return (
    <div className="App">
      <div className="input-container">
        <TextBox />
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
