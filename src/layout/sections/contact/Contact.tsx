import { S } from "./Contact_Styles";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Button } from "../../../components/Button";

export const Contact: React.FC = () => {
  return (
    <S.Contact id={"contact"}>
      <Container>
        <SectionTitle padding={"0 0 50px 0"}>Contact</SectionTitle>
        <FlexWrapper justify={"center"}>
          <S.Form method={"post"} encType={"multipart/form-data"}>
            <S.Field
              id={"name"}
              name={"name"}
              placeholder={"Your Name"}
              required
            />
            <S.Field
              id={"email"}
              name={"email"}
              type={"email"}
              placeholder={"Your email"}
              required
            />
            <S.Field
              id={"message"}
              name={"message"}
              placeholder={"Your Message"}
              as={"textarea"}
              required
            />
          </S.Form>
        </FlexWrapper>
        <Button
          type={"submit"}
          padding={"16px 32px"}
          maxWidth={"170px"}
          color={"#151D41"}
        >
          Submit
        </Button>
      </Container>
    </S.Contact>
  );
};
