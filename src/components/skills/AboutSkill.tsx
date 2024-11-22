import styled from "styled-components";
import { Icon } from "../icon/Icon";
import { Text } from "../Text";

type AboutSkillPropsType = {
  icon: string;
  title: string;
  viewbox?: string;
};

export const Skill = (props: AboutSkillPropsType) => {
  return (
    <StyledSkill>
      <Icon
        iconid={props.icon}
        width={"125"}
        height={"125"}
        viewBox={"-40 -25 200 100"}
      />
      <Text fontSize={"1rem"} textAlign={"center"}>
        {props.title}
      </Text>
    </StyledSkill>
  );
};

const StyledSkill = styled.div``;
