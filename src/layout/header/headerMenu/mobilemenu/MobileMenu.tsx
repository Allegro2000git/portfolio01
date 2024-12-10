import { useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };

  return (
    <S.MobileMenu>
      <S.Burgerbutton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.Burgerbutton>

      <S.MobileMenuPopUp
        isOpen={menuIsOpen}
        onClick={() => {
          setmenuIsOpen(false);
        }}
      >
        <Menu />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
