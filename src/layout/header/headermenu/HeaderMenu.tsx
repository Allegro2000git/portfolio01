import styled from "styled-components";
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link href="#">{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  &:last-child {
    margin-right: 30px;
  }
`;

const Link = styled.a`
  font-weight: 500;
  text-align: center;
  font-size: 18px;
  color: #000000;

  &:hover {
    color: ${theme.colors.thirdBq};
  }
`;
