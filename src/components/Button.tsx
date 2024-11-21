import styled from "styled-components";
import { theme } from "../styles/Theme";

type ButtonPropsType = {
  padding?: string;
  maxWidth?: string;
  lineHeight?: string;
  borderRadiud?: string;
  color?: string;
};

export const Button = styled.button<ButtonPropsType>`
  display: inline-block;
  cursor: pointer;
  font-size: 20px;
  background: ${theme.colors.thirdBq};
  padding: ${(props) => props.padding || "undefined"};
  line-height: ${(props) => props.lineHeight || "undefined"};
  max-width: ${(props) => props.maxWidth || "undefined"};
  border-radius: ${(props) => props.borderRadiud || "50px"};
  color: ${(props) => props.color || "undefined"};
`;
