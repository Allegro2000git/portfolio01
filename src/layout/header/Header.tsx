import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "./headermenu/HeaderMenu";

const headerItems = ["Home", "About", "Service", "My work", "Resume"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Logo />
          <HeaderMenu menuItems={headerItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${theme.colors.primaryBq};
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
`;
