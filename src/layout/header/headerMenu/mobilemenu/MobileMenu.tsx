import { useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC = () => {
  const [menuisOpen, setmenuisOpen] = useState(false);

  const onBurgerBtnClick = () => {
    setmenuisOpen(!menuisOpen);
  };

  return (
    <S.MobileMenu>
      <S.Burgerbutton isOpen={menuisOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.Burgerbutton>

      <S.MobileMenuPopUp
        isOpen={menuisOpen}
        onClick={() => {
          setmenuisOpen(false);
        }}
      >
        <Menu />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
