import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import {
  Box,
  ButtonList,
  Container,
  Flex,
  Heading,
  Kicker,
  Section,
  Subhead,
  Text,
} from "./ui";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Ornament from "./ornament.js";

SwiperCore.use([Pagination]);

const StyledSection = styled(Section)`
  position: relative;
  z-index: 0;
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction:   row:
  justify-content: center;
  align-items: center;
  background: #f7fafa;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const ImageBox = styled(Box)`
  position: relative;
  max-height: 70vh;
  @media (max-width: 800px) {
    position: static;
    max-height: auto;
  }
`;

const ContentBox = styled(Box)`
  text-align: ${(props) => (props.center ? "center" : "left")};
  padding: ${(props) => (props.paddingY ? "2rem 0" : "0")};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: absolute;
  left: 10px;
  top: 10%;
  max-height: 70vh;
  color: white;
  @media (max-width: 800px) {
    position: static;
    color: black;
  }
`;

function HeroList(props) {
  return (
    <StyledSection>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {props.content.map((item) => (
          <SwiperSlide key={item.id}>
            <SlideWrapper>
              <ImageBox>
                {item.image && (
                  <GatsbyImage
                    alt={item.image.alt}
                    image={getImage(item.image.gatsbyImageData)}
                  />
                )}
              </ImageBox>
              <ContentBox center paddingY={5}>
                <Heading as="h1">
                  {item.kicker && <Kicker>{item.kicker}</Kicker>}
                  {item.h1}
                </Heading>
                <Subhead as="h2">{item.subhead}</Subhead>
                <Text as="p">{item.text}</Text>
                <ButtonList links={item.links} />
              </ContentBox>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
      <Ornament />
    </StyledSection>
  );
}

export default HeroList;

export const query = graphql`
  fragment HomepageHeroListContent on HomepageHeroList {
    id
    text
    content {
      id
      ...HomepageHeroContent
    }
  }
`;
