const Button = ({ delta }) => {
    return (
      <button onClick={delta.onClick}>
        {delta.text}
      </button>
    )
  }

export default Button