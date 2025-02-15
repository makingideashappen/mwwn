import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Instagram, Facebook, Youtube } from "react-feather";
import {
  Container,
  Flex,
  FlexList,
  Box,
  Space,
  NavLink,
  Text,
  IconLink,
  VisuallyHidden,
} from "./ui";
import BrandLogo from "./brand-logo";
import Ornament from "./ornament.js";

const socialMedia = {
  INSTAGRAM: {
    url: "https://instagram.com",
    name: "Instagram",
    icon: <Instagram />,
  },
  YOUTUBE: {
    url: "https://youtube.com",
    name: "YouTube",
    icon: <Youtube />,
  },
};

const FooterContainer = styled(Box)`
  padding: 0.2rem 0;
`;

const MobileSocialsContainer = styled(FlexList)`
  position: fixed;
  background: white;
  bottom: 0;
  right: 0;
  z-index: 10;
  border-radius: 2rem 0 0 0;
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.2);
  height: auto;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0.8rem;
    li {
      display: flex;
      justify-content: center;
      alighn-items: center;
      a {
        margin: 0.2rem;
        svg {
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
  @media (max-width: 800px) {
    ul {
      li {
        a {
          svg {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }
  }
`;

const getSocialURL = ({ service, username }) => {
  const domain = socialMedia[service]?.url;
  if (!domain) return false;
  return `${domain}/${username}`;
};

const getSocialIcon = ({ service }) => {
  return socialMedia[service]?.icon;
};

const getSocialName = ({ service }) => {
  return socialMedia[service]?.name;
};

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      layout {
        footer {
          id
          links {
            id
            href
            text
          }
          meta {
            id
            href
            text
          }
          copyright
          socialLinks {
            id
            service
            username
          }
        }
      }
    }
  `);

  const { links, meta, socialLinks, copyright } = data.layout.footer;

  return (
    <>
      {socialLinks ? (
        <FooterContainer as="footer">
          <Container>
            <Flex variant="start" responsive>
              <NavLink to="/">
                <VisuallyHidden>Home</VisuallyHidden>
                <BrandLogo />
              </NavLink>
              <Space />
              <MobileSocialsContainer>
                <ul>
                  {socialLinks &&
                    socialLinks.map((link) => {
                      const url = getSocialURL(link);
                      return (
                        url && (
                          <li key={link.id}>
                            <IconLink to={url}>
                              <VisuallyHidden>
                                {getSocialName(link)}
                              </VisuallyHidden>
                              {getSocialIcon(link)}
                            </IconLink>
                          </li>
                        )
                      );
                    })}
                </ul>
              </MobileSocialsContainer>
            </Flex>
            <Space size={5} />
            <Flex variant="start" responsive>
              <FlexList variant="start" responsive>
                {links &&
                  links.map((link) => (
                    <li key={link.id}>
                      <NavLink to={link.href}>{link.text}</NavLink>
                    </li>
                  ))}
              </FlexList>
              <Space />
              <FlexList>
                {meta &&
                  meta.map((link, i) => (
                    <li key={i}>
                      <NavLink to={link ? link.href : ""}>
                        <Text variant="small">{link ? link.text : ""}</Text>
                      </NavLink>
                    </li>
                  ))}
              </FlexList>
              <Text variant="small">{copyright}</Text>
            </Flex>
          </Container>
          <Ornament />
          {/* Uncomment if needed */}
          {/* <StyledFooterImage src={Part} alt="" /> */}
        </FooterContainer>
      ) : (
        <></>
      )}
    </>
  );
}
