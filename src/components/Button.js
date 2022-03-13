import styled from "styled-components";
import { css } from "styled-components";
import theme from "./theme";

const Button = styled.button.attrs(({ size }) => ({
  size: theme.btnSize[size] || theme.btnSize["large"],
}))`
  outline: none;
  border: 0;
  margin: 1pt;

  background-color: ${theme.classicBlue.primary};
  font-family: ${theme.fontFamily};
  color: ${theme.fontColor};

  ${({ size }) => css(size)};

  &:hover {
    background-color: ${theme.classicBlue.shade1};
  }

  &:active {
    background-color: ${theme.classicBlue.shade2};
  }

  &:focus:not(:hover) {
    ${theme.focusStyle};
  }
  &:disabled {
    ${theme.disabledStyle}
  }
`;

export default Button;
