import styled from "styled-components";

const handleSize = (size) => {
  switch (size) {
    case "40":
      return "font-size: 16pt; padding: 8pt 20pt 8pt 20pt;";
    case "32":
      return "font-size: 14pt; padding: 8pt 16pt 8pt 16pt;";
    case "24":
      return "font-size: 12pt; padding: 4pt 12pt 4pt 12pt;";
    default:
      return "font-size: 16pt; padding: 8pt 20pt 8pt 20pt;";
  }
};

const Button = styled.button`
  outline: none;
  box-sizing: border-box;
  background-color: #0068b5;
  width: auto;
  display: inline-block;
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  line-height: 1.5;
  border: 0;
  margin: 1pt;
  ${({ size }) => handleSize(size)};

  &:hover {
    background-color: #004a86;
  }

  &:active {
    background-color: #00285a;
  }

  &:focus:not(:hover) {
    box-shadow: inset 0 0 0 2pt #0068b5, inset 0 0 0 3pt #fff;
  }
  &:disabled {
    background-color: #e9eaeb;
    color: #cdced1;
    pointer-events: none;
  }
`;

export default Button;
