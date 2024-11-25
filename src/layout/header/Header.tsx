import styled from "styled-components";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { theme } from "../../styles/Theme";
import { Link } from "../../components/logo/Link";
import { HeaderMenu } from "./headermenu/HeaderMenu";
import { Button } from "../../components/Button";

const headerItems = ["Home", "About", "Service", "Contact"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Link />
          <FlexWrapper justify="space-around" align={"center"} wrap={"wrap"}>
            <HeaderMenu menuItems={headerItems} />
            <Button
              lineHeight={"1.2"}
              padding={"1rem 2rem"}
              maxWidth={"170px"}
              color={"#151D41"}
            >
              Resume
            </Button>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background: ${theme.colors.headerBq};
  padding: 15px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;
