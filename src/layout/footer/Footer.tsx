import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Social } from "../../components/socials/Socials";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Copyright>Designed and developed by Fabio Scaletta 2021</Copyright>
          <Social />
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${theme.colors.primaryBq};
`;

const Copyright = styled.small`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;
