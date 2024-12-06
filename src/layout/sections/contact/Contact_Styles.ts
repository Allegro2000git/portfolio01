import styled from "styled-components";
import { theme } from "../../../styles/Theme";


const Contact = styled.section`
  background: ${theme.colors.primaryBq};
  padding: 25px 0 50px;
 


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
  align-items: center;
  margin: 0 auto;

  textarea {
    resize: none;
    height: 150px;
  }
`;

const Field = styled.input`
  font-family: "Poppins", sans-serif;
  width: 100%;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px;
  color: #000000;
`;

export const S = {
	Contact, Form, Field
}