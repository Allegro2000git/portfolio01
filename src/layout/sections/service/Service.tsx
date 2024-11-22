import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Direction } from "./directions/Directions";
import { DirectionsProjects } from "./directions/sliderProjects";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { ImageWrapper } from "../../../components/wrapper/ImageWrapper";
import proj1 from "../../../assets/images/proj1.webp";
import proj2 from "../../../assets/images/proj2.webp";
import proj3 from "../../../assets/images/proj3.webp";
import { Button } from "../../../components/Button";

export const Service = () => {
  return (
    <StyledService>
      <Container>
        <Subtitle>My service</Subtitle>
        <SectionTitle padding={"16px 0 92px 0"}>What I Do</SectionTitle>
        <FlexWrapper justify={"space-around"} align={"center"}>
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
          <FlexWrapper justify={"space-around"} align={"start"}>
            <DirectionsProjects
              subtitle={"UX/UI DESIGN"}
              title={"Implement UX design into live and user friendly "}
            />
            <ImageWrapper src={proj1} borderRadius={"20px"} />
          </FlexWrapper>
          <FlexWrapper justify={"space-around"} align={"start"}>
            <DirectionsProjects
              subtitle={"FRONT END DEVELOPMENT"}
              title={"Implement UX design into live and user friendly "}
            />
            <ImageWrapper src={proj2} borderRadius={"20px"} />
          </FlexWrapper>
          <FlexWrapper justify={"space-around"} align={"start"}>
            <DirectionsProjects
              subtitle={"RESPONSIVE DESIGN"}
              title={
                "I build landing pages and responsive websites and web App"
              }
            />
            <ImageWrapper src={proj3} borderRadius={"20px"} />
          </FlexWrapper>
        </StyledProjects>
        <Button
          lineHeight={"1.2"}
          padding={"1rem 2rem"}
          maxWidth={"214px"}
          color={"#151D41"}
        >
          See more
        </Button>
      </Container>
    </StyledService>
  );
};

const StyledService = styled.section`
  background: ${theme.colors.secondaryBq};
  padding-top: 140px;
  text-align: center;
`;

const Subtitle = styled.span`
  display: block;
  font-weight: 400;
  font-size: 18px;
  color: #494949;
  text-align: center;
`;

const StyledProjects = styled.section``;
