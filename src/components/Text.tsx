import styled from "styled-components";

type TextPropsType = {
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  lineHeight?: string;
  textAlign?: string;
  maxWidth?: string;
};

export const Text = styled.p<TextPropsType>`
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "400"};
  padding: ${(props) => props.padding || "undefined"};
  line-height: ${(props) => props.lineHeight || "undefined"};
  text-align: ${(props) => props.textAlign || "undefined"};
  max-width: ${(props) => props.maxWidth || "undefined"};
`;
