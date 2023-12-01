import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
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
} from "./ui"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import 'swiper/css';
import { Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Pagination]);

export default function HeroList(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 840px)" });
console.log(props.content,"hero")
  return (
    <Section>
      <div width="100%">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
        >
        { props.content.map((item, index) =>
        (
          <SwiperSlide>
              <Flex gap={4}>
                <Box >
                  {item.image && (
                    <GatsbyImage
                      alt={item.image.alt}
                      image={getImage(item.image.gatsbyImageData)}
                    />
                  )}
                </Box>
                <Box >
                  <Heading as="h1">
                    {item.kicker && <Kicker>{item.kicker}</Kicker>}
                    {item.h1}
                  </Heading>
                  <Subhead as="h2">{item.subhead}</Subhead>
                  <Text as="p">{item.text}</Text>
                  <ButtonList links={item.links} />
                </Box>
              </Flex>
          </SwiperSlide>
       ))} 
        </Swiper>
      </div>
    </Section>
  )
}

export const query = graphql`
fragment HomepageHeroListContent on HomepageHeroList {
  id
  text
  content {
    id
    ...HomepageHeroContent
  }
}
`
