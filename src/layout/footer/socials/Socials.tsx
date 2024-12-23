import { S } from "../Footer_Styles";
import { Icon } from "../../../components/icon/Icon";

type SocialItemPropsType = {
  icon: string;
  url: string;
  viewbox?: string;
};

const socialItems: Array<SocialItemPropsType> = [
  { icon: "insta", url: "https://www.instagram.com/" },
  { icon: "whatsapp", url: "https://www.whatsapp.com/" },
  { icon: "telegram", url: "https://web.telegram.org/k/" },
];

export const Social: React.FC = () => {
  return (
    <S.Social>
      {socialItems.map((item, index) => {
        return (
          <S.Item key={index}>
            <S.Link href={item.url} target={"_blank"}>
              <Icon iconid={item.icon} viewBox={"-25 -25 90 90"} />
            </S.Link>
          </S.Item>
        );
      })}
    </S.Social>
  );
};
