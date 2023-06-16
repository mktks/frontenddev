import "./textBox.css"

interface TextBoxProps {
  /** テキストボックスの中身 */
  inputText: string
  /** 値が変わった時の処理 */
  onChange: (value: string) => void
}

export const TextBox = (props: TextBoxProps) => {
  const { inputText, onChange } = props
  return <input type="text" className="textbox" value={inputText} onChange={(event) => onChange(event.target.value)} />
}
