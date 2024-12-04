import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "../Service_Styles";
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";
import { Image } from "../../../../components/wrapper/Image";
import { projectsData } from "./Projects";
import "../../../../styles/sliderCustom.css";

type SlidePropsType = {
  subtitle: string;
  title: string;
  src: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
      <S.ContentText>
        <S.Subtitle>{props.subtitle}</S.Subtitle>
        <S.Title>{props.title}</S.Title>
        <S.Link href={"#"}>Learn more</S.Link>
      </S.ContentText>
      <Image
        borderRadius={"20px"}
        shadow={"0px 4px 25px 0px #00000040"}
        src={props.src}
      />
    </FlexWrapper>
  );
};

const items = projectsData.map((p, index) => (
  <Slide key={index} subtitle={p.subtitle} title={p.title} src={p.src} />
));

export const Slider = () => (
  <S.Project>
    <AliceCarousel mouseTracking items={items} />
  </S.Project>
);
