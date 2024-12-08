import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";

const Main = styled.section`
  	position: relative;
  	background: ${theme.colors.primaryBq};
  	padding: 132px 0 50px;
	overflow: hidden;
	
	@media  ${theme.media.mobile} {
		padding-top: 100px;
	 }
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

const Flag = styled.span``

const Eclipse1 = styled.span`
position: absolute;
top: 20%;
left: 0;

@media screen and (max-width: 1320px) {
	display: none;
}
`

const Eclipse2 = styled.span`
position: absolute;
top: 0;
right: -5%;

@media screen and (max-width: 1320px) {
	display: none;
}
`



export const S = {
	Main, SmallText, Title, Text, Flag, Eclipse1, Eclipse2
}