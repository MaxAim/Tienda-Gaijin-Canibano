const Button = ({
  color,
  backgroundColor,
  width,
  text,
  height,
  onClick,
  border,
  display,
  margin,
}) => {
  return (
    <button
      style={{
        color: color,
        backgroundColor: backgroundColor,
        width: width,
        height: height,
        border: border,
        borderRadius: "10px",
        display: display,
        fontSize: "1.1vw",
        margin: margin,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};


export default Button;
