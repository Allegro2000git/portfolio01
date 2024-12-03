import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  background: ${theme.colors.headerBq};
  position: fixed;
  padding-top: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;


export const S = {
	Header
}