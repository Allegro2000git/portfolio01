import React from "react";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/wrapper/FlexWrapper";
import { S } from "./Header_Styles";
import { Link } from "../../components/logo/Link";
import { DesktopMenu } from "./headerMenu/desktopmenu/DesktopMenu";
import { MobileMenu } from "./headerMenu/mobilemenu/MobileMenu";

const headerItems = ["Home", "About", "Service", "Contact"];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Link />
          <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
            {width < breakpoint ? (
              <MobileMenu menuItems={headerItems} />
            ) : (
              <DesktopMenu menuItems={headerItems} />
            )}
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
