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
      <Text lineHeight={"1.2"} padding={"50px 0 36px 0"}>
        {props.subtitle}
      </Text>
      <Text
        fontSize={"2.25rem"}
        fontWeight={"700"}
        lineHeight={"1.3"}
        maxWidth={"380px"}
        padding={"0 0 70px 0"}
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

  &:before {
    content: "";
    position: absolute;
    width: 1116px;
    height: 431px;
    border: 2px solid ${theme.colors.thirdBq};
    border-radius: 30px;
    left: -51px;
    bottom: -90px;
    z-index: -2;
  }
`;

const Link = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  padding: 12px;
  color: #000000;
`;
