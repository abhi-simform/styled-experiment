import styled from "styled-components";

const StyledContainer = styled.div`
  display: ${(props) => (props.display ? props.display : "block")};
  max-width: min(90%, ${(props) => (props.maxWidth ? props.maxWidth : "60rem")});
  margin-inline: auto;
  ${(props) => props.styles};
`;

const Container = (props) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
