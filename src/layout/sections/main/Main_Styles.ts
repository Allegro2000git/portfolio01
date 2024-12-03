import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";

const Main = styled.section`
  background: ${theme.colors.primaryBq};
  padding: 100px 0 50px;
`;

const SmallText = styled.h2`
  ${font({ color: "#0fbf61", lineHeight: 1.3 })};
  font-size: 30px;
`;

const Title = styled.h1`
  ${font({
    family: '"Poppins", sans-serif',
    weight: 700,
    Fmax: 60,
    Fmin: 40,
  })};
  margin: 7px 0 21px 0;
`;

const Text = styled.p`
  ${font({ Fmax: 18, Fmin: 18, lineHeight: 1.4, color: "#494949" })};
  max-width: 441px;
  margin-bottom: 32px;
`;

export const S = {
	Main, SmallText, Title, Text
}