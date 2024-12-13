import { useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";
import { CLIEngine } from "eslint";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.Burgerbutton isOpen={menuIsOpen} onClick={onBurgerClick}>
        <span></span>
      </S.Burgerbutton>

      <S.MobileMenuPopUp aria-modal="true" isOpen={menuIsOpen}>
        <Menu onClose={onBurgerClick} />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
