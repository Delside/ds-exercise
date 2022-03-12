import styled from "styled-components";
import theme from "./theme";

// Could be potentially refactored
const handleSize = (size) => {
  switch (size) {
    case "40":
      return theme.height40;
    case "32":
      return theme.height32;
    case "24":
      return theme.height24;
    default:
      return theme.height40;
  }
};

const Button = styled.button`
  outline: none;
  box-sizing: border-box;
  width: auto;
  display: inline-block;
  border: 0;
  margin: 1pt;

  background-color: ${theme.classicBlue.primary};
  font-family: ${theme.fontFamily};
  color: ${theme.fontColor};

  ${({ size }) => handleSize(size)};

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
