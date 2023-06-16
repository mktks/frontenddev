import "./button.css"

interface ButtonProps {
  text: string
  onClick: () => void
}

export const Button = (props: ButtonProps) => {
  const { text, onClick } = props

  return (
    <button type="button" className="button" onClick={onClick}>
      {text}
    </button>
  )
}
