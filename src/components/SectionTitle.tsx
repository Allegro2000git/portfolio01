import styled from "styled-components";

type SectionTitlePropsType = {
  padding?: string;
  textAlign?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: #0fbf61;
  padding: ${(props) => props.padding || "undefined"};
  text-align: ${(props) => props.textAlign || "center"};
  font-size: ${(props) => props.fontSize || "40px"};
  font-weight: ${(props) => props.fontWeight || "700"};
  margin: ${(props) => props.margin || "undefined"};
`;
