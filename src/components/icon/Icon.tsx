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
      width={props.width || "70"}
      height={props.height || "70"}
      viewBox={props.viewBox || "0 0 70 70"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use xlinkHref={`${iconsSprite}#${props.iconid}`} />
    </svg>
  );
};
