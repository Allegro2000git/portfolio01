import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

//Common Menu
const MenuItem = styled.li``;

const LinkNav = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  color: ${theme.colors.thirdBq};

  &:hover, &.active {
    color: #000000;
  }
`;

//Desktop Menu
const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

//Mobile Menu
const MobileMenu = styled.nav``;

const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(206,212,211,0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: none;

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    align-items: center;
  }
`;

const Burgerbutton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 1000;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.thirdBq};
    position: absolute;
    left: 40px;
    bottom: 50px;


    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: ${theme.colors.primaryBq};
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: #000000;
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: #000000;
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;


export const S = {
	MenuItem, LinkNav, DesktopMenu, MobileMenu, MobileMenuPopUp, Burgerbutton
}