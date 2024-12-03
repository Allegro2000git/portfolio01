import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const GoTopBtn = () => {
  return (
    <StyledGoTopBtn
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Icon
        iconid={"upArrow"}
        height={"50"}
        width={"40"}
        viewBox={"0 0 820 400"}
      />
    </StyledGoTopBtn>
  );
};

const StyledGoTopBtn = styled.button`
  padding: 5px;
  position: fixed;
  right: 0px;
  bottom: 10px;
  z-index: 10000;
`;
