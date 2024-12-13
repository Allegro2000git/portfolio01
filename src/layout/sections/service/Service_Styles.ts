import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";
import { Image } from "../../../components/wrapper/Image";
import { Button } from "../../../components/Button";


//Directions

const Direction = styled.div`
  text-align: left;
  max-width: 300px;
`;

const IconWrapper = styled.div`
  padding: 25px;
  margin-right: 30px;
  border-radius: 20px;
  background-color: ${theme.colors.fourthBq};
`;

const Text = styled.p`
  ${font({ weight: 500, lineHeight: 1.3, Fmax: 20, Fmin: 20 })}
`;

const Number = styled.span`
  ${font({ weight: 500, lineHeight: 1.3, Fmax: 20, Fmin: 20 })}
`

//Slider

const Slider = styled.div`
	margin: 163px 0 25px;
	padding: 10px;
	text-align: left;
	border: 2px solid silver;
	border-radius: 30px;
	cursor: grab;
   background-color: ${theme.colors.font};


	@media screen and (max-width: 1026px) {
			margin-top: 80px;
		}

	${Image} {
		transform: translateY(-53px);

		@media screen and (max-width: 982px) {
			transform: none;
		}
	}

	&:active {
		cursor: grabbing;
	}

	@media ${theme.media.tablet} {
		height: 600px;
	}

	@media ${theme.media.mobile} {
		height: 460px;
	}
`;

const ContentText = styled.div`
	
@media screen and (max-width: 1020px){
	text-align: center;
}
`

const Subtitle = styled.h3`
color: #494949;
`;

const Title = styled.h2`
  ${font({ weight: 700, Fmax: 35, Fmin: 25 })};
  max-width: 380px;
  margin: 36px 0 70px;

  @media screen and (max-width: 1022px) {
    text-align: center;
	 margin: 10px 0;
  }

`;

const ButtonLinks = styled.div`
margin-bottom: 10px;
${Button}:nth-child(1) {
	margin-right: 25px;
}`


//Common

const Service = styled.section`
  text-align: center;
  padding: 25px 0;
`;

const SmallTitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  color: #494949;
`;


export const S = {
	Direction, IconWrapper, Number, Text, Slider , ContentText, Subtitle, Title, ButtonLinks, Service, SmallTitle
}