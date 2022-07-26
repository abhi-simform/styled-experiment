import styled, { css } from "styled-components";
import { breakpoint } from "../../Variables.style";

const buttonMixin = ({
  outlined,
  borderColor,
  borderRadius = "0.25rem",
  backgroundColor = "coral",
  paddingBlock = "0.75rem",
  paddingInline = "1.5rem",
  fontSize = "1.2rem",
}) => {
  return css`
    cursor: pointer;
    display: inline-block;
    background-color: ${backgroundColor};
    background-color: ${outlined ? "transparent" : backgroundColor};
    border: 1px solid ${borderColor ?? backgroundColor};
    border-radius: ${borderRadius};
    padding-block: ${paddingBlock};
    padding-inline: ${paddingInline};
    color: ${outlined ? backgroundColor : "white"};
    font-size: ${fontSize};
    transition: all 250ms ease-in-out;
    &:hover {
      background-color: ${outlined ? backgroundColor : "transparent"};
      color: ${outlined ? "white" : backgroundColor};
    }
    ${breakpoint.lg(css`
      border-radius: 100px;
    `)}
  `;
};
export const StyledButton = styled.button`
  ${buttonMixin}
`;
export const StyledLink = styled.a`
  ${buttonMixin}
`;
