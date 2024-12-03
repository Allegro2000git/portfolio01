import { useState } from "react";
import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
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
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
