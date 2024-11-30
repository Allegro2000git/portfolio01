import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  background: ${theme.colors.headerBq};
  position: fixed;
  padding: 10px 0;
  opacity: 0.95;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;


export const S = {
	Header
}