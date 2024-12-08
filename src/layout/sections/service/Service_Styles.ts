import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";


//Directions

const Direction = styled.div`
text-align: left;
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

//Slider

const Slider = styled.div`
	padding: 10px;
	margin: 50px 0 25px;
	text-align: left;
	border: 2px solid silver;
	border-radius: 30px;
	cursor: grab;
   background-color: ${theme.colors.font};

	&:active {
		cursor: grabbing;
	}

	@media ${theme.media.tablet} {
		height: 600px;
	}

	@media ${theme.media.mobile} {
		height: 450px;
	}


`;

const ContentText = styled.div`
	
@media screen and (max-width: 1019px){
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

const ProjectLink = styled.a`
	display: inline-block;
	font-weight: 500;
	font-size: 20px;
	margin-bottom: 10px;
	color: #000000;
	border-radius: 20px;


  &:hover {
    color: ${theme.colors.thirdBq};
  	}

  &:active {
    transform: scale(0.95);
    color: ${theme.colors.thirdBq};
  	}
`;

//Common

const Service = styled.section`
  text-align: center;
  padding: 25px 0;
`;

const Smalltitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  color: #494949;
`;


export const S = {
	Direction, IconWrapper, Text, Slider , ContentText, Subtitle, Title, ProjectLink, Service, Smalltitle
}