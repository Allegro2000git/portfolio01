import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";
import { S } from "../Service_Styles";
import { Image } from "../../../../components/wrapper/Image";

type ProjectPropsType = {
  subtitle: string;
  title: string;
  src: string;
};

export const Project: React.FC<ProjectPropsType> = (
  props: ProjectPropsType
) => {
  return (
    <S.Project>
      <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
        <div>
          <S.Subtitle>{props.subtitle}</S.Subtitle>
          <S.Title>{props.title}</S.Title>
          <S.Link href={"#"}>Learn more</S.Link>
        </div>
        <Image
          borderRadius={"20px"}
          shadow={"0px 4px 25px 0px #00000040"}
          src={props.src}
        />
      </FlexWrapper>
    </S.Project>
  );
};
