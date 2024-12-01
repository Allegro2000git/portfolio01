import styled from "styled-components";
import { theme } from "../../../styles/Theme";


const Contact = styled.section`
  background: ${theme.colors.primaryBq};
  padding: 50px 0;
  text-align: center;

  @media ${theme.media.mobile} {
    padding: 10px 0;
  }
`;

const Form = styled.form`
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

export const S = {
	Contact, Form, Field
}