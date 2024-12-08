import { ElementRef, useRef } from "react";
import { S } from "./Contact_Styles";
import { Container } from "../../../components/Container";
import { SectionTitle } from "../../../components/SectionTitle";
import { Button } from "../../../components/Button";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const form = useRef<ElementRef<"form">>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_el0t0cf", "template_trlbfv8", form.current, {
        publicKey: "qAe-LyGRhGsIe6wIY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };
  return (
    <S.Contact id={"contact"}>
      <Container>
        <SectionTitle padding={"0 0 50px 0"}>Contact</SectionTitle>
        <S.Form
          method={"post"}
          encType={"multipart/form-data"}
          ref={form}
          onSubmit={sendEmail}
        >
          <S.Field
            id={"name"}
            name={"user_name"}
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
            placeholder={"Your message"}
            as={"textarea"}
            required
          />
          <Button
            type={"submit"}
            padding={"16px 32px"}
            maxWidth={"170px"}
            color={"#151D41"}
            background={"#a4e6a3"}
          >
            Submit
          </Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};
