import styled, { keyframes } from "styled-components";
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

const Social = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-5px);
	 
  }
`;

const Item = styled.li`
  cursor: pointer;

  &:hover {
	transition: transform linear;
	animation: ${bounce} 1.5s infinite;
	
  }
`;
const Link = styled.a`

`



export const S = {
	Footer, Copyright, Social, Item, Link
}