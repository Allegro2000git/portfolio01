import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { theme } from "../../../../styles/Theme";

type DirectionProjectsPropsType = {
  subtitle: string;
  title: string;
};

export const DirectionsProjects = (props: DirectionProjectsPropsType) => {
  return (
    <StyledDirectionProjects>
      <SubTitle>{props.subtitle}</SubTitle>
      <Text
        fontSize={"35px"}
        fontWeight={"700"}
        lineHeight={"1.4"}
        maxWidth={"380px"}
        padding={"36px 0 70px 0"}
      >
        {props.title}
      </Text>
      <Link href={"#"}>Learn more</Link>
    </StyledDirectionProjects>
  );
};

const StyledDirectionProjects = styled.div`
  position: relative;
  z-index: 2;
  text-align: left;
  padding: 50px 0 0 50px;

  &:before {
    content: "";
    position: absolute;
    width: 1116px;
    height: 400px;
    border: 2px solid ${theme.colors.thirdBq};
    border-radius: 30px;
    left: 0;
    bottom: -70px;
    z-index: -2;
  }
`;

const SubTitle = styled.span``;

const Link = styled.a`
  font-weight: 500;
  font-size: 20px;

  line-height: 1.2;
  padding: 12px;
  color: #000000;

  &::after {
    content: "--->";
    margin-left: 15px;
  }

  &:hover {
    color: ${theme.colors.thirdBq};
  }
`;
