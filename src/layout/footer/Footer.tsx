import { S } from "./Footer_Styles";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";

import { Social } from "./socials/Socials";

export const Footer = () => {
  return (
    <S.Footer>
      <Container>
        <FlexWrapper justify={"space-around"} align={"center"} wrap="wrap">
          <S.Copyright>
            Designed and developed by Fabio Scaletta 2021
          </S.Copyright>
          <Social />
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
