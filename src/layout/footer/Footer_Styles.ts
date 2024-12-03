import styled from "styled-components";
import { theme } from "../../styles/Theme";


// Common
const Footer = styled.footer`
  background: ${theme.colors.primaryBq};
  border-top: 4px solid ${theme.colors.thirdBq};
  padding: 15px 0 0;
  text-align: center;
`;

const Copyright = styled.small`
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
`;

//Social

const Social = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
  }
`;

const Item = styled.li`
  cursor: pointer;
`;

const Link = styled.a``;


export const S = {
	Footer, Copyright, Social, Item, Link
}