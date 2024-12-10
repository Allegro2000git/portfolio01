import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  padding-top: 10px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  &.scrolled {
	background-color: rgba(164, 230, 163, 0.90);
	transition-duration: 0.5s;
  }
`;


export const S = {
	Header
}