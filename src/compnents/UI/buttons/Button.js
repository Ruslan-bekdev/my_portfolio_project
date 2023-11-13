const Button = ({children,fc}) => {
  return <button onClick={fc}>{children}</button>
};

export default Button;