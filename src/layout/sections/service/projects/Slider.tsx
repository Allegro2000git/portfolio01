import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { S } from "../Service_Styles";
import { FlexWrapper } from "../../../../components/wrapper/FlexWrapper";
import { Image } from "../../../../components/wrapper/Image";
import { projectsData } from "./Projects";
import "../../../../styles/sliderCustom.css";
import { Icon } from "../../../../components/icon/Icon";
import Typewriter from "typewriter-effect";
import { Button } from "../../../../components/Button";

type SlidePropsType = {
  subtitle: string;
  title: string;
  src: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slider>
      <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
        <S.ContentText>
          <S.Subtitle>{props.subtitle}</S.Subtitle>
          <S.Title>{props.title}</S.Title>
          <S.ProjectLink>
            <Typewriter
              options={{
                strings: ["Learn more... --->", "Project --->"],
                autoStart: true,
                loop: true,
              }}
            />
          </S.ProjectLink>
        </S.ContentText>
        <Image
          borderRadius={"20px"}
          shadow={"0px 4px 25px 0px #00000040"}
          src={props.src}
        />
      </FlexWrapper>
    </S.Slider>
  );
};

const items = projectsData.map((p, index) => (
  <Slide key={index} subtitle={p.subtitle} title={p.title} src={p.src} />
));

export const Slider = () => (
  <>
    <AliceCarousel
      mouseTracking
      items={items}
      renderPrevButton={() => {
        return (
          <Icon
            iconid={"leftBtn"}
            width={"60px"}
            height={"40px"}
            viewBox={"0 0 100 100"}
          />
        );
      }}
      renderNextButton={() => {
        return (
          <Icon
            iconid={"rightBtn"}
            width={"60px"}
            height={"40px"}
            viewBox={"0 0 100 100"}
          />
        );
      }}
    />
  </>
);
