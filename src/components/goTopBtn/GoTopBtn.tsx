import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";
import { useEffect, useState } from "react";

export const GoTopBtn = () => {
  const [showBtn, setshowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setshowBtn(true) : setshowBtn(false);
    });
  }, []);

  return (
    <>
      {showBtn && (
        <StyledGoTopBtn
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <Icon
            iconid={"upArrow"}
            height={"50px"}
            width={"40px"}
            viewBox={"0 0 820 400"}
          />
        </StyledGoTopBtn>
      )}
    </>
  );
};

const StyledGoTopBtn = styled.button`
  padding: 5px;
  position: fixed;
  right: 0px;
  bottom: 10px;
  z-index: 10000;
`;
