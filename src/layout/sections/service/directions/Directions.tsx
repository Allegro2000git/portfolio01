import { S } from "../Service_Styles";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";

type DirectionsPropsType = {
  icon: string;
  number: string;
  title: string;
};

export const Direction: React.FC<DirectionsPropsType> = (
  props: DirectionsPropsType
) => {
  return (
    <S.Direction>
      <FlexWrapper align={"center"} justify={"space-between"}>
        <S.IconWrapper>
          <Icon iconid={props.icon} />
        </S.IconWrapper>
        <div>
          <S.Text>{props.number}</S.Text>
          <S.Text>{props.title}</S.Text>
        </div>
      </FlexWrapper>
    </S.Direction>
  );
};
