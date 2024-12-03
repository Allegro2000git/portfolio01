import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";

//Common

const About = styled.section`
  margin: 60px 0 90px;
  background-color: ${theme.colors.secondaryBq};
  display: flex;
  span {
    color: ${theme.colors.thirdBq};
  }

  @media ${theme.media.mobile} {
	margin: 0;
  }
`;

const Text = styled.p`
  max-width: 551px;
  font-size: 18px;
  ${font({ lineHeight: 1.4, color: "#494949" })}

  &:nth-child(2) {
    margin: 30px 0 15px;
  }

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

    position: absolute;
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

const Skills = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    flex-grow: 1;
    justify-content: space-around;
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: 500;
`;


export const S = {
	About, Text, ImageWrapper, Skills, Title
}