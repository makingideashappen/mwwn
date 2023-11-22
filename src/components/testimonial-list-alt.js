import React from "react";

import { useMediaQuery } from "react-responsive";
import { graphql } from "gatsby"

import { Swiper, SwiperSlide} from "swiper/react";
import SwiperCore  from "swiper";
import 'swiper/css';
import {  Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
    Container,
    Section,
    Heading,
    Kicker,
    Box,
    FlexList,
    Blockquote,
    Text,
    Flex
} from "./ui"

SwiperCore.use([Pagination]);



function TestimonialListAlt(props) {
    const isMobile = useMediaQuery({ query: "(max-width: 840px)" });

    return (
        <Section style={{ backgroundColor: "rgb(219,233,232,0.21)", position: "relative" }}>
            <Container style={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
                <Flex>
                    <Heading style={{ marginTop: isMobile ? "auto" : 0 }}>
                        {props.kicker && <Kicker>{props.kicker}</Kicker>}
                        {props.heading}
                    </Heading>
                </Flex>
                <div center style={{ maxWidth: isMobile ? "100%" : "80%" }}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={isMobile ? 1 : 2}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {props.content.map((testimonial, index) => (
                            <SwiperSlide>
                                <FlexList
                                    variant="center"
                                    direction="column"
                                    gutter={3}
                                    style={{
                                        position: "relative",
                                        background: "#fff",
                                        width: isMobile ? "80%" : "50%",
                                        margin: "10px 10px 10px auto",
                                        boxShadow: "0px 3px 18px rgba(0, 0, 0, 0.2)",
                                        width: isMobile ? "auto" : "400px",
                                        borderRadius: "4%",
                                        height: "auto",
                                        marginBottom: isMobile ? 0 : 50
                                    }}>
                                    <Box padding={3}>
                                        <Blockquote>
                                            {testimonial.quote}
                                        </Blockquote>
                                        <div style={{ position: "relative" }}>
                                            <Text>{testimonial.source}</Text>
                                            <div style={{ position: "absolute", fontSize: "3rem", bottom: "0rem", right: "0rem" }}>"</div>
                                        </div>
                                    </Box>
                                </FlexList>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </Container>
        </Section>
    )
}


export default TestimonialListAlt;

export const query = graphql`
  fragment HomepageTestimonialListContent on HomepageTestimonialList {
    id
    kicker
    heading
    content {
      id
      quote
      source
      avatar {
        id
        gatsbyImageData
        alt
      }
    }
  }
`

