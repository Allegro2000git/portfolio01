import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  padding?: string;
  maxWidth?: string;
  lineHeight?: string;
  borderRadiud?: string;
  color?: string;
  background?: string;
};

export const Button = styled.button<ButtonPropsType>`
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  padding: ${(props) => props.padding || "undefined"};
  line-height: ${(props) => props.lineHeight || "1.2"};
  max-width: ${(props) => props.maxWidth || "undefined"};
  border-radius: ${(props) => props.borderRadiud || "50px"};
  color: ${(props) => props.color || "undefined"};
  background: ${(props) => props.background || theme.colors.thirdBq};
  &:hover {
    background-color: #717171;
    color: ${theme.colors.font};
  }
`;
