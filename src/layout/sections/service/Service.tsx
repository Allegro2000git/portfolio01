import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Direction } from "./directions/Directions";
import { DirectionsProjects } from "./directions/Projects";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { Image } from "../../../components/wrapper/Image";
import proj1 from "../../../assets/images/proj1.webp";
import proj2 from "../../../assets/images/proj2.webp";
import proj3 from "../../../assets/images/proj3.webp";
import proj4 from "../../../assets/images/proj4.webp";
import { Button } from "../../../components/Button";

export const Service = () => {
  return (
    <StyledService>
      <Container>
        <Subtitle>My service</Subtitle>
        <SectionTitle padding={"16px 0 92px 0"}>What I Do</SectionTitle>
        <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
          <Direction icon={"code"} number={"01"} title={"UX/UI Design"} />
          <Direction
            icon={"ux"}
            number={"02"}
            title={"Front End Development"}
          />
          <Direction
            icon={"respons"}
            number={"03"}
            title={"Responsive Design"}
          />
        </FlexWrapper>
        <StyledProjects>
          <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
            <DirectionsProjects
              subtitle={"UX/UI DESIGN"}
              title={"Implement UX design into live and user friendly "}
            />
            <Image
              src={proj1}
              borderRadius={"20px"}
              shadow="0px 4px 25px 0px #00000040"
            />
          </FlexWrapper>
          <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
            <DirectionsProjects
              subtitle={"FRONT END DEVELOPMENT"}
              title={"Implement UX design into live and user friendly "}
            />
            <Image
              src={proj2}
              borderRadius={"20px"}
              shadow="0px 4px 25px 0px #00000040"
            />
          </FlexWrapper>
          <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
            <DirectionsProjects
              subtitle={"RESPONSIVE DESIGN"}
              title={
                "I build landing pages and responsive websites and web App"
              }
            />
            <Image
              src={proj3}
              borderRadius={"20px"}
              shadow="0px 4px 25px 0px #00000040"
            />
          </FlexWrapper>
          <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
            <DirectionsProjects
              subtitle={"CORRECT STYLES"}
              title={
                "I build landing pages and responsive websites and web App"
              }
            />
            <Image
              src={proj4}
              borderRadius={"20px"}
              shadow="0px 4px 25px 0px #00000040"
            />
          </FlexWrapper>
        </StyledProjects>
        <Button
          padding={"12px 65px"}
          maxWidth={"214px"}
          color={"#151D41"}
          lineHeight={"1.4"}
        >
          See more
        </Button>
      </Container>
    </StyledService>
  );
};

const StyledService = styled.section`
  background: ${theme.colors.secondaryBq};
  text-align: center;
  margin-bottom: 50px;
`;

const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: #494949;
`;

const StyledProjects = styled.div`
  margin: 45px 0 50px;
  display: flex;
  flex-direction: column;
  gap: 38px;

  ${FlexWrapper} {
    border: 2px solid ${theme.colors.thirdBq};
    padding: 10px;
    border-radius: 30px;
    background-color: ${theme.colors.thirdBq};
  }
`;
