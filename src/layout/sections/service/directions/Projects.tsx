import styled from "styled-components";
import { font } from "../../../../styles/CommonFont";
import { theme } from "../../../../styles/Theme";

type DirectionProjectsPropsType = {
  subtitle: string;
  title: string;
};

export const DirectionsProjects = (props: DirectionProjectsPropsType) => {
  return (
    <StyledDirectionProjects>
      <SubTitle>{props.subtitle}</SubTitle>
      <Text>{props.title}</Text>
      <Link href={"#"}>Learn more</Link>
    </StyledDirectionProjects>
  );
};

const StyledDirectionProjects = styled.div`
  text-align: left;
`;

const SubTitle = styled.span``;

const Text = styled.p`
  ${font({ lineHeight: 1.4, weight: 700, Fmax: 35, Fmin: 25 })};
  max-width: 380px;
`;

const Link = styled.a`
  font-weight: 500;
  font-size: 20px;

  line-height: 1.2;
  padding: 12px;
  color: #000000;

  &::after {
    content: "--->";
    margin-left: 15px;
  }

  &:hover {
    color: ${theme.colors.font};
  }
`;
