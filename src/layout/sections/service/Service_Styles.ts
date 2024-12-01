import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/CommonFont";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";

//Directions

const Direction = styled.section``;

const IconWrapper = styled.div`
  padding: 25px;
  margin: 10px;
  border-radius: 20px;
  background-color: ${theme.colors.fourthBq};
`;

const Text = styled.p`
  ${font({ weight: 500, lineHeight: 1.3, Fmax: 20, Fmin: 20 })}
  text-align: left;
`;

//Project

const Project = styled.div`
  margin: 45px 0 50px;
  display: flex;
  flex-direction: column;
  text-align: left;

  ${FlexWrapper} {
    border: 2px solid ${theme.colors.thirdBq};
    padding: 15px;
    border-radius: 30px;
    background-color: ${theme.colors.thirdBq};
  }

  @media screen and (max-width: 1022px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
color: #494949;
`;

const Title = styled.h2`
  ${font({ lineHeight: 1.4, weight: 700, Fmax: 35, Fmin: 25 })};
  max-width: 380px;
  margin: 36px 0 70px;

  @media screen and (max-width: 1022px) {
    margin: 20px 0 40px;
    text-align: center;
  }
`;

const Link = styled.a`
  font-weight: 500;
  font-size: 20px;

  padding: 12px;
  color: #000000;
  border: 1px solid ${theme.colors.font};
  background-color: ${theme.colors.font};
  border-radius: 20px;

  &::after {
    content: "--->";
    margin-left: 15px;
  }

  &:hover {
    color: ${theme.colors.thirdBq};
  }
`;

//Common

const Service = styled.section`
  background: ${theme.colors.secondaryBq};
  text-align: center;
  margin: 25px 0;
`;

const Smalltitle = styled.h3`
  font-weight: 400;
  font-size: 18px;
  color: #494949;
`;



export const S = {
	Direction, IconWrapper, Text, Project, Subtitle, Title, Link, Service, Smalltitle
}