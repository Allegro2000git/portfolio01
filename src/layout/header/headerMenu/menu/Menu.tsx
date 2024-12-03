import { S } from "../HeaderMenu_Styles";

const items = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Service",
    href: "service",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

export const Menu: React.FC = () => {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <S.MenuItem key={index}>
            <S.LinkNav
              smooth={true}
              spy={true}
              to={item.href}
              activeClass={"active"}
              offset={-290}
            >
              {item.title}
            </S.LinkNav>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};
