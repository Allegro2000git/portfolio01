import styled from "styled-components";
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

export const SkillsList = () => {
  return (
    <StyledSkills>
      <ul>
        {skills.map((item, index) => {
          return (
            <li key={index}>
              <Icon iconid={item.icon} viewBox={"0 0 120 110"} />
              <Title>{item.title}</Title>
            </li>
          );
        })}
      </ul>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    align-items: left;
    justify-content: space-between;
  }
`;

const Title = styled.p`
  text-align: center;
  font-weight: 500;
`;
