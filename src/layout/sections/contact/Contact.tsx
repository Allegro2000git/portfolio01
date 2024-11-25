import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Button } from "../../../components/Button";

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
        <SectionTitle padding={"0 0 50px 0"}>Contact</SectionTitle>
        <FlexWrapper justify={"center"}>
          <StyledForm method={"post"} encType={"multipart/form-data"}>
            <Field
              id={"name"}
              name={"name"}
              placeholder={"Your Name"}
              required
            />
            <Field
              id={"email"}
              name={"email"}
              type={"email"}
              placeholder={"Your email"}
              required
            />
            <Field
              id={"message"}
              name={"message"}
              placeholder={"Your Message"}
              as={"textarea"}
              required
            />
          </StyledForm>
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
    </StyledContact>
  );
};

const StyledContact = styled.section`
  background: ${theme.colors.primaryBq};
  padding: 75px 0 40px 0;
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  margin-bottom: 32px;

  textarea {
    resize: none;
    height: 150px;
  }
`;

const Field = styled.input`
  font-family: "Poppins", sans-serif;
  width: 100%;
  font-size: 16px;
  border: 1px solid #5eff00;
  border-radius: 10px;
  padding: 10px;
  color: #000000;
`;
