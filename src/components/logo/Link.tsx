import { Icon } from "../icon/Icon";
import { animateScroll as scroll } from "react-scroll";

export const Link: React.FC = () => {
  return (
    <a
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Icon iconid={"logo"} />
    </a>
  );
};
