import { S } from "../HeaderMenu_Styles";
import { Menu } from "../menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.MobileMenu>
      <S.Burgerbutton isOpen={true}>
        <span></span>
      </S.Burgerbutton>

      <S.MobileMenuPopUp isOpen={true}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuPopUp>
    </S.MobileMenu>
  );
};
