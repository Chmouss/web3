const Button = ({ onClick, text, value }) => {
  const handleClick = (e) => {
    onClick(parseInt(e.target.dataset.delta))
  }
    return (
      <button onClick={handleClick} data-delta={value}>
        {text}
      </button>
    )
  }

export default Button