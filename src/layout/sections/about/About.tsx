import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import aboutImg from "../../../assets/images/aboutImg.webp";
import { Image } from "../../../components/wrapper/Image";
import { Text } from "../../../components/Text";
import { Skill } from "../../../components/skills/AboutSkill";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle padding={"0 0 37px 0;"}>About Me</SectionTitle>
        <FlexWrapper justify={"space-between"}>
          <ImageWrapper>
            <Image
              src={aboutImg}
              borderRadius={"25px"}
              width={"280px"}
              height={"420px"}
            />
          </ImageWrapper>
          <FlexWrapper direction={"column"} align={"start"}>
            <Text
              fontSize={"1.2rem"}
              maxWidth={"580px"}
              lineHeight={"1.5"}
              padding={"0 0 32px 15px"}
              textAlign={"start"}
            >
              Hello! My name is Fabio Scaletta and I am a{" "}
              <span>UX/UI designer</span> and
              <span>Front End Developer</span>. I enjoy creating things that
              live on the internet. An experienced Software Engineer with a
              demonstrated history of working in the Computer Software industry.
              Skilled in Web Design, UX/UI design, and Front-end Development.
              Specialize in Information Security and software engineering,
              creating dynamic and beautiful web pages. I have been in the field
              for nearly 5 years, and have been loving every minute of it.
            </Text>
            <Text fontSize={"1.2rem"} lineHeight={"1.5"} padding={"0 0 0 15px"}>
              Here are a few technologies I’ve been working with recently:
            </Text>
            <FlexWrapper wrap={"wrap"}>
              <Skill icon={"html"} title={"HTML5"} />
              <Skill icon={"css"} title={"CSS3"} />
              <Skill icon={"js"} title={"JS"} />
              <Skill icon={"react"} title={"React"} />
              <Skill icon={"saas"} title={"SAAS"} />
              <Skill icon={"git"} title={"Git"} />
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  background: ${theme.colors.secondaryBq};
  span {
    display: inline-block;
    color: #0fbf61;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  z-index: 10;

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
  }
`;
