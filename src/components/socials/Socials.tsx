import styled from "styled-components";
import { Icon } from "../icon/Icon";

type SocialItemType = {
  icon: string;
  url: string;
  viewbox?: string;
};

const socialItems: Array<SocialItemType> = [
  { icon: "insta", url: "https://www.instagram.com/" },
  { icon: "whatsapp", url: "https://www.whatsapp.com/" },
  { icon: "telegram", url: "https://web.telegram.org/k/" },
];

export const Social = () => {
  return (
    <StyledSocial>
      <ul>
        {socialItems.map((item, index) => {
          return (
            <SocialItem key={index}>
              {" "}
              <SocialLink
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon iconid={item.icon} viewBox={"-25 -20 80 70"} />
              </SocialLink>
            </SocialItem>
          );
        })}
      </ul>
    </StyledSocial>
  );
};

const StyledSocial = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-between;
  }
`;

const SocialItem = styled.li`
  cursor: pointer;
`;

const SocialLink = styled.a``;
