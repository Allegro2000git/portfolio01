import styled from "styled-components";
import { Icon } from "../icon/Icon";

export const GoTopBtn = () => {
  return (
    <StyledgoTopBtn>
      <Icon
        iconid={"upArrow"}
        height={"50"}
        width={"40"}
        viewBox={"0 0 620 400"}
      />
    </StyledgoTopBtn>
  );
};

const StyledgoTopBtn = styled.button`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 10px;
`;
