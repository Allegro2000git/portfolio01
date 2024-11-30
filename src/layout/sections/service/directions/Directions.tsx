import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";
import { font } from "../../../../styles/CommonFont";
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
          <Text>{props.number}</Text>
          <Text>{props.title}</Text>
        </div>
      </FlexWrapper>
    </StyledDirection>
  );
};

const StyledDirection = styled.section``;

const IconWrapper = styled.div`
  padding: 25px;
  margin: 15px;
  border-radius: 20px;
  background-color: ${theme.colors.fourthBq};
`;

const Text = styled.p`
  ${font({ weight: 500, lineHeight: 1.3, Fmax: 20, Fmin: 20 })}
`;
