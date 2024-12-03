import React from "react";
import { S } from "./Service_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/wrapper/FlexWrapper";
import { Direction } from "./directions/Directions";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/Button";

import { Slider } from "./projects/Slider";

export const Service: React.FC = () => {
  return (
    <S.Service>
      <Container>
        <S.Smalltitle>My service</S.Smalltitle>
        <SectionTitle margin={"25px 0 30px"}>What I Do</SectionTitle>
        <FlexWrapper
          justify={"space-between"}
          align={"center"}
          wrap={"wrap"}
          gap="25px"
        >
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
        <Slider />
        <Button
          padding={"12px 65px"}
          maxWidth={"214px"}
          color={"#151D41"}
          lineHeight={"1.4"}
        >
          See more
        </Button>
      </Container>
    </S.Service>
  );
};
