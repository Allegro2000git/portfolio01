import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";
import { Text } from "../../../../components/Text";
import { theme } from "../../../../styles/Theme";

type DirectionsPropsType = {
  icon: string;
  number: string;
  title: string;
};

export const Direction = (props: DirectionsPropsType) => {
  return (
    <StyledDirection>
      <FlexWrapper align={"center"} justify={"space-between"}>
        <IconWrapper>
          <Icon iconid={props.icon} />
        </IconWrapper>
        <div>
          <Text
            fontWeight={"500"}
            fontSize={"20px"}
            lineHeight={"1.3"}
            color={"#494949"}
            padding={"0 0 8px 0"}
          >
            {props.number}
          </Text>
          <Text
            fontWeight={"500"}
            fontSize={"20px"}
            lineHeight={"1.3"}
            color={"#000000"}
          >
            {props.title}
          </Text>
        </div>
      </FlexWrapper>
    </StyledDirection>
  );
};

const StyledDirection = styled.section``;

const IconWrapper = styled.div`
  margin-right: 30px;
  padding: 25px;
  border-radius: 20px;
  background-color: ${theme.colors.primaryBq};
`;
