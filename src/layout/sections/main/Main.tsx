import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Image } from "../../../components/wrapper/Image";
import mainImg from "../../../assets/images/mainImg.webp";
import { S } from "./Main_Styles";
import { Button } from "../../../components/Button";

export const Main: React.FC = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
          <div>
            <S.SmallText>Hello, I’m</S.SmallText>
            <S.Title>Fabio Scaletta</S.Title>
            <S.Text>
              I’m a UX/UI designer and Front End Developer based in Kuala
              Lumpur, Malaysia! I love designing, coding, creating and building
              stuff.
            </S.Text>
            <Button padding={"12px 40px"} color={"#151D41"} lineHeight={"1.3"}>
              Send Email
            </Button>
          </div>
          <Image src={mainImg} borderRadius={"25px"} />
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
