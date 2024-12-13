import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";
import { Button } from "../../../components/Button";
import ecl1 from "../../../assets/ecl1.svg";
import ecl2 from "../../../assets/ecl2.svg";

const Main = styled.section`
  	position: relative;
	z-index: 5;
	width: 100%;
  	background: ${theme.colors.primaryBq};
  	padding: 132px 0 50px;
	overflow: hidden;

	&:before {
		content: "";
		background-image: url(${ecl1}) ;
		background-repeat: no-repeat;
		position: absolute;
		width:193px;
		height: 193px;
		top: 20%;
		left: 0;

	}

	&:after {
		content: "";
		background-image: url(${ecl2}) ;
		background-repeat: no-repeat;
		position: absolute;
		width:193px;
		height: 193px;
		top: 0;
		right: -5%;
	}

	${Button} {
		margin-bottom: 15px;
	}
	
	@media  ${theme.media.mobile} {
		padding-top: 100px;
	 }

	&::before, &::after {
		@media screen and (max-width: 1320px) {
			display: none;
		}
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

export const S = {
	Main, SmallText, Title, Text
}