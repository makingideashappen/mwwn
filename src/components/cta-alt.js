import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Box,
  BlockLink,
} from "./ui";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  position: relative;
`;

const StyledSection = styled(Section)`
  min-height: 200px;
  max-height: 400px;
  padding: 0;
  border-radius: 24px;
  @media (max-width: 840px) {
    min-height: auto;
    border-radius: 0;
  }
  :hover {
    img {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
    }
  }
`;

const StyledBox = styled(Box)`
  position: relative;
  min-height: auto;
  max-height: 400px;
  @media (max-width: 840px) {
    min-height: 200px;
  }
`;

const ContentWrapper = styled(Container)`
  position: absolute;
  z-index: 5;
  width: 100%;
  top: 30%;
  display: flex;
  justify-content: center;
`;

const CircleBackground = styled.div`
  background: #0f365a;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ImageWrapper = styled(Nudge)`
  width: 100%;
  @media (max-width: 840px) {
    width: 200%;
  }
`;

export default function HomepageCta(props) {
  return (
    <StyledContainer width="fullbleed">
      <BlockLink to={props.link}>
        <StyledSection padding={5} radius="large" background="primary">
          <StyledBox>
            <ContentWrapper>
              <CircleBackground>
                <Heading center>{props.heading}</Heading>
              </CircleBackground>

              <Text bold as="p" center variant="lead">
                {props.text}
              </Text>
            </ContentWrapper>

            {props.image && (
              <ImageWrapper>
                <GatsbyImage
                  alt={props.image.alt}
                  image={getImage(props.image.gatsbyImageData)}
                />
              </ImageWrapper>
            )}
          </StyledBox>
        </StyledSection>
      </BlockLink>
    </StyledContainer>
  );
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    heading
    image {
      alt
      id
      gatsbyImageData
    }
    link
  }
`;
