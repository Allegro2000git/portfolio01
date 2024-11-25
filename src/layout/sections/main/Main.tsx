import styled from "styled-components";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Image } from "../../../components/wrapper/Image";
import mainImg from "../../../assets/images/mainImg.webp";
import { Text } from "../../../components/Text";
import { Button } from "../../../components/Button";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"}>
          <div>
            <SmallText>Hello, I’m</SmallText>
            <Title>Fabio Scaletta</Title>
            <Text maxWidth={"476px"} lineHeight={"1.5"} padding={"0 0 32px 0"}>
              I’m a UX/UI designer and Front End Developer based in Kuala
              Lumpur, Malaysia! I love designing, coding, creating and building
              stuff.
            </Text>
            <Button padding={"12px 40px"} color={"#151D41"} lineHeight="1.4">
              Send Email
            </Button>
          </div>
          <Image src={mainImg} borderRadius={"25px"} />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  background: ${theme.colors.primaryBq};
  margin-top: 100px;
  padding: 47px 0 92px;
  display: flex;
`;

const SmallText = styled.h2`
  padding-top: 52px;
  font-weight: 400;
  font-size: 30px;
  color: #0fbf61;
`;

const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-size: 60px;
  margin: 7px 0 21px 0;
`;
