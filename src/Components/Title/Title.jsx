import styled from "styled-components";

const StyledTitle = styled.div`
  text-align: ${(props) => (props.align ? props.align : "center")};
  color: ${(props) => (props.color ? props.color : "palevioletred")};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : "1em")};
  font-weight: 700;
  & > h1 {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  & > h2 {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  & > h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Title = (props) => {
  if (props.level == 1) {
    return (
      <StyledTitle {...props}>
        <h1>{props.children}</h1>
      </StyledTitle>
    );
  }
  if (props.level == 2) {
    return (
      <StyledTitle {...props}>
        <h2>{props.children}</h2>
      </StyledTitle>
    );
  }
  if (props.level == 3) {
    return (
      <StyledTitle {...props}>
        <h3>{props.children}</h3>
      </StyledTitle>
    );
  }
};

export default Title;
