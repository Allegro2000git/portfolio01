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
  display: inline-block;
  font-size: 18px;
  white-space: nowrap;
  margin-bottom: 15px;
  padding: ${(props) => props.padding || "undefined"};
  line-height: ${(props) => props.lineHeight || "1.2"};
  max-width: ${(props) => props.maxWidth || "undefined"};
  border-radius: ${(props) => props.borderRadiud || "50px"};
  color: ${(props) => props.color || "undefined"};
  background: ${(props) => props.background || theme.colors.thirdBq};

  &:hover {
    background-color: ${theme.colors.thirdBq};
    color: ${theme.colors.font};

	 box-shadow: 10px 10px 25px 0px #00000040;
	 transition-delay: 0.15s;
	 

	&:active {
	transform: scale(0.8);
	}
  }
`;
