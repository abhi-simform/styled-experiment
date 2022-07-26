import { StyledButton, StyledLink } from "./Button.style";

const Button = (props) => {
  const Component = props.href ? StyledLink : StyledButton;
  return <Component {...props} />;
};

export default Button;
