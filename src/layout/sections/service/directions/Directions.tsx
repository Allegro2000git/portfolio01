import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";
import { Text } from "../../../../components/Text";

type DirectionsPropsType = {
  icon: string;
  number: string;
  title: string;
};

export const Direction = (props: DirectionsPropsType) => {
  return (
    <StyledDirection>
      <FlexWrapper align={"start"} justify={"space-between"}>
        <Icon iconid={props.icon} />
        <div>
          <Text
            fontWeight={"500"}
            fontSize={"1.25rem"}
            lineHeight={"1.3"}
            color={" #494949"}
            padding={"0 0 8px 30px"}
          >
            {props.number}
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={"1.25rem"}
            lineHeight={"1.3"}
            color={"#000000"}
            padding={"0 0 0 30px"}
          >
            {props.title}
          </Text>
        </div>
      </FlexWrapper>
    </StyledDirection>
  );
};

const StyledDirection = styled.section`
  margin-bottom: 120px;
`;
