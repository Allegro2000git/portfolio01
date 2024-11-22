import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { Button } from "../../../../components/Button";

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

const StyledDirectionProjects = styled.section`
  padding-bottom: 108px;
`;

const Link = styled.a`
  cursor: pointer;
  display: inline-block;
  font-weight: 500px;
  font-size: 1.25rem;
  line-height: 1.3;
  padding: 0.7rem;
  color: #000000;
  text-decoration: none;
  transition: background-color 0.3s;
`;
