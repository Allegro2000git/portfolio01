import iconsSprite from "../../assets/iconsSprite.svg";

type IconPropsType = {
  iconid: string;
  width?: string;
  height?: string;
  viewBox?: string;
};

export const Icon = (props: IconPropsType) => {
  return (
    <svg
      width={props.width || "65"}
      height={props.height || "65"}
      viewBox={props.viewBox || "0 0 65 65"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconid}`} />
    </svg>
  );
};
