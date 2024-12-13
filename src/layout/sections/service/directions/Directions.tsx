import { S } from "../Service_Styles";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";

type DirectionPropsType = {
  icon: string;
  number: string;
  title: string;
};

const directionData: Array<DirectionPropsType> = [
  {
    icon: "code",
    number: "01",
    title: "UX/UI Design",
  },
  {
    icon: "ux",
    number: "02",
    title: "Front End Development",
  },
  {
    icon: "respons",
    number: "03",
    title: "Responsive Design",
  },
];

export const Direction = () => {
  return (
    <FlexWrapper
      align={"center"}
      justify={"space-between"}
      wrap={"wrap"}
      grow={1}
    >
      {directionData.map((item, index) => {
        return (
          <S.Direction key={index}>
            <FlexWrapper align={"center"} justify={"space-between"}>
              <S.IconWrapper>
                <Icon iconid={item.icon} />
              </S.IconWrapper>
              <div>
                <S.Number>{item.number}</S.Number>
                <S.Text>{item.title}</S.Text>
              </div>
            </FlexWrapper>
          </S.Direction>
        );
      })}
    </FlexWrapper>
  );
};
