const Button = ({ classStyle, text , onClick}) => {
  return (
    <button type="button" className={classStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
