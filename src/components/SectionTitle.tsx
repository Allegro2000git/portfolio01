import styled from "styled-components";

type SectionTitlePropsType = {
  padding?: string;
  textAlign?: string;
  fontSize?: string;
  fontWeight?: string;
};

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  padding: ${(props) => props.padding || "undefined"};
  text-align: ${(props) => props.textAlign || "undefined"};
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: ${(props) => props.fontWeight || "700"};
`;
