import styled from "styled-components";
import { Project } from "./Project";
import proj1 from "../../../../assets/images/proj1.webp";
import proj2 from "../../../../assets/images/proj2.webp";
import proj3 from "../../../../assets/images/proj3.webp";
import proj4 from "../../../../assets/images/proj4.webp";

const projectsData = [
  {
    subtitle: "UX/UI DESIGN",
    title: "Research, Design, Prototype, and Animation",
    src: proj1,
  },
  {
    subtitle: "FRONT END DEVELOPMENT",
    title: "Implement UX design into live and user friendly",
    src: proj2,
  },
  {
    subtitle: "RESPONSIVE DESIGN",
    title: "I build landing pages and responsive websites and web App",
    src: proj3,
  },
  {
    subtitle: "CORRECT STYLES",
    title: "Easy and coorect Design and Animation",
    src: proj4,
  },
];

export const Projects: React.FC = () => {
  return (
    <ProjectMap>
      {projectsData.map((p, index) => {
        return (
          <Project
            key={index}
            subtitle={p.subtitle}
            title={p.title}
            src={p.src}
          />
        );
      })}
    </ProjectMap>
  );
};

const ProjectMap = styled.div``;
