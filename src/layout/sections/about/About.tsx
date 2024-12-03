import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { S } from "./About_Styles";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import aboutImg from "../../../assets/images/aboutImg.webp";
import { Image } from "../../../components/wrapper/Image";
import { Skills } from "./Skills";

export const About: React.FC = () => {
  return (
    <S.About id={"about"}>
      <Container>
        <SectionTitle margin={"0 0 37px 0"}>About Me</SectionTitle>
        <FlexWrapper justify={"space-around"} wrap={"wrap"}>
          <S.ImageWrapper>
            <Image
              src={aboutImg}
              borderRadius={"20px"}
              width={"280px"}
              height={"420px"}
            />
          </S.ImageWrapper>
          <FlexWrapper direction={"column"} align={"start"}>
            <S.Text>
              Hello! My name is Fabio Scaletta and I am a{" "}
              <span>UX/UI designer</span> and <span>Front End Developer</span>.
              I enjoy creating things that live on the internet. An experienced
              Software Engineer with a demonstrated history of working in the
              Computer Software industry. Skilled in Web Design, UX/UI design,
              and Front-end Development. Specialize in Information Security and
              software engineering, creating dynamic and beautiful web pages. I
              have been in the field for nearly 5 years, and have been loving
              every minute of it.
            </S.Text>
            <S.Text>
              Here are a few technologies I’ve been working with recently:
            </S.Text>
            <Skills />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.About>
  );
};
