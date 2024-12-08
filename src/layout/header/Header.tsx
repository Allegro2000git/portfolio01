import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { S } from "./Header_Styles";
import { Link } from "../../components/logo/Link";
import { DesktopMenu } from "./headerMenu/desktopmenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobilemenu/MobileMenu";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const [scrolled, setScrolled] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY);
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.Header className={scrolled ? "scrolled" : ""}>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Link />
          <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
            {width < breakpoint ? <MobileMenu /> : <DesktopMenu />}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
