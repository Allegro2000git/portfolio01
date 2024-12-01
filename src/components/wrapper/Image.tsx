import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ImageWrapperPropsType = {
  width?: string;
  height?: string;
  objectFit?: string;
  padding?: string;
  borderRadius?: string;
  shadow?: string;
};

export const Image = styled.img<ImageWrapperPropsType>`
  position: relative;
  object-fit: cover;
  margin: 25px 15px;
  z-index: 3;

  width: ${(props) => props.width || "548px"};
  height: ${(props) => props.height || "394px"};
  object-fit: ${(props) => props.objectFit || "cover"};
  padding: ${(props) => props.padding || "undefined"};
  border-radius: ${(props) => props.borderRadius || "undefined"};
  box-shadow: ${(props) => props.shadow || "undefined"};
  border-radius: ${(props) => props.borderRadius || "undefined"};

  @media ${theme.media.mobile} {
    width: 360px;
    height: 340px;
  }

  @media screen and (max-width: 454px) {
    width: 285px;
    height: 260px;
  }
`;
