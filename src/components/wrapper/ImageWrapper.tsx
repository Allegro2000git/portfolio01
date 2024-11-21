import styled from "styled-components";

type ImageWrapperPropsType = {
  width?: string;
  height?: string;
  objectFit?: string;
  padding?: string;
  borderRadius?: string;
};

export const ImageWrapper = styled.img<ImageWrapperPropsType>`
  width: ${(props) => props.width || "548px"};
  height: ${(props) => props.height || "394px"};
  object-fit: ${(props) => props.objectFit || "cover"};
  padding: ${(props) => props.padding || "undefined"};
  border-radius: ${(props) => props.borderRadius || "undefined"};
`;
