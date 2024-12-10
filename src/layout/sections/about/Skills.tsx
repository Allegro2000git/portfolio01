import { S } from "./About_Styles";
import { Icon } from "../../../components/icon/Icon";

type SkillsPropsType = {
  icon: string;
  title: string;
};

const skills: Array<SkillsPropsType> = [
  { icon: "html", title: "HTML5" },
  { icon: "css", title: "CSS3" },
  { icon: "js", title: "Js" },
  { icon: "react", title: "React" },
  { icon: "saas", title: "SAAS" },
  { icon: "git", title: "Git" },
];

export const Skills: React.FC = () => {
  return (
    <S.Skills>
      {skills.map((item, index) => {
        return (
          <li key={index}>
            <Icon iconid={item.icon} viewBox={"0 0 120 110"} />
            <S.Title>{item.title}</S.Title>
          </li>
        );
      })}
    </S.Skills>
  );
};
