import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { ImageWrapper } from "../../../components/wrapper/ImageWrapper";
import mainImg from "../../../assets/images/mainImg.webp";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"}>
          <FlexWrapper direction={"column"}>
            <Text
              fontSize="1.2rem"
              maxWidth={"476px"}
              lineHeight={"1.8"}
              padding={"0 0 2rem 0"}
            >
              <Subtitle>Hello, I’m</Subtitle>
              <Title>Fabio Scaletta</Title>
              I’m a UX/UI designer and Front End Developer based in Kuala
              Lumpur, Malaysia! I love designing, coding, creating and building
              stuff.
            </Text>
            <Button
              lineHeight={"1.2"}
              padding={"1rem 2rem"}
              maxWidth={"170px"}
              color={"#151D41"}
            >
              Send Email
            </Button>
          </FlexWrapper>
          <ImageWrapper src={mainImg} borderRadius={"25px"} />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background: ${theme.colors.primaryBq};
`;

const Subtitle = styled.span`
  font-weight: 400px;
  font-size: 30px;
  color: #0fbf61;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 60px;
  line-height: 70px;
  margin-bottom: 20px;
`;
