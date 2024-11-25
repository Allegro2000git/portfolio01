import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import aboutImg from "../../../assets/images/aboutImg.webp";
import { Image } from "../../../components/wrapper/Image";
import { Text } from "../../../components/Text";
import { SkillsList } from "./Aboutskills";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <SectionTitle padding={"0 0 37px 0;"}>About Me</SectionTitle>
        <FlexWrapper justify={"space-around"}>
          <ImageWrapper>
            <Image
              src={aboutImg}
              borderRadius={"25px"}
              width={"280px"}
              height={"420px"}
              padding="0 20px 0 0"
            />
          </ImageWrapper>
          <FlexWrapper direction={"column"} align={"start"}>
            <Text lineHeight={"1.6"} maxWidth={"551px"}>
              Hello! My name is Fabio Scaletta and I am a{" "}
              <span>UX/UI designer</span> and <span>Front End Developer</span>.
              I enjoy creating things that live on the internet. An experienced
              Software Engineer with a demonstrated history of working in the
              Computer Software industry. Skilled in Web Design, UX/UI design,
              and Front-end Development. Specialize in Information Security and
              software engineering, creating dynamic and beautiful web pages. I
              have been in the field for nearly 5 years, and have been loving
              every minute of it.
            </Text>
            <Text padding="32px 0 0 0">
              Here are a few technologies I’ve been working with recently:
            </Text>
            <SkillsList />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section`
  margin: 140px 0;
  background-color: ${theme.colors.secondaryBq};
  display: flex;
  span {
    color: #0fbf61;
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
  }
`;
