import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";

//Common

const About = styled.section`
  margin: 60px 0 90px;
  background-color: ${theme.colors.secondaryBq};
  span {
    color: ${theme.colors.thirdBq};
  }

  @media ${theme.media.mobile} {
	margin: 30px 0 50px;
  }
`;

const Text = styled.p`
max-width: 551px;
${font({ lineHeight: 1.4, color: "#494949", Fmax: 18, Fmin: 16 })};
margin-bottom: 25px;

@media screen and (max-width: 881px) {
	padding-top: 25px;
}
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    height: 420px;
    width: 280px;
    border: 3px solid ${theme.colors.thirdBq};

    border-radius: 20px;
    top: 38px;
    left: -49px;
    z-index: -1;

	 @media screen and (max-width: 881px) {
		top: 15px;
		left: -20px;
	 }

    @media ${theme.media.mobile} {
      display: none;
    }

}
`;

// map Skills

const Skills = styled.ul`
    display: grid;
	 grid-template-rows: 2;
	 grid-template-columns: repeat(3, 1fr);
	 gap: 30px;
`;

const Title = styled.p`
  text-align: center;
  font-weight: 500;
`;

export const S = {
	About, Text, ImageWrapper, Skills, Title
}