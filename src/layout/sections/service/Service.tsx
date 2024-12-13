import React from "react";
import { S } from "./Service_Styles";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container";
import { Slider } from "./slider/Slider";
import { Direction } from "./directions/Directions";

export const Service: React.FC = () => {
  return (
    <S.Service id={"service"}>
      <Container>
        <S.SmallTitle>My service</S.SmallTitle>
        <SectionTitle margin={"25px 0 30px"}>What I Do</SectionTitle>
        <Direction />
        <Slider />
      </Container>
    </S.Service>
  );
};
