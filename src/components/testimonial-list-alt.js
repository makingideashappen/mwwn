import React from "react";
import { useMediaQuery } from "react-responsive";
import { graphql } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import {
  Container,
  Section,
  Heading,
  Kicker,
  Blockquote,
  Text,
  Avatar,
} from "./ui";

SwiperCore.use([Pagination]);

const StyledSection = styled(Section)`
  background-color: rgba(219, 233, 232, 0.21);
  position: relative;
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  @media (max-width: 840px) {
    flex-direction: column;
  }
`;

const StyledHeading = styled(Heading)`
  margin-top: 0;
  @media (max-width: 840px) {
    margin-top: auto;
  }
`;

const TestimonialWrapper = styled.div`
  max-width: 80%;
  @media (max-width: 840px) {
    max-width: 100%;
  }
`;

const TestimonialCard = styled.div`
  position: relative;
  background: #fff;
  width: 400px;
  margin: 10px auto;
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.2);
  border-radius: 4%;
  height: auto;
  padding: 24px;
  text-align: center;
  @media (max-width: 840px) {
    width: auto;
  }
`;

const QuoteMark = styled.div`
  position: absolute;
  font-size: 3rem;
  bottom: 0rem;
  right: 0rem;
`;

function TestimonialListAlt(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 840px)" });

  return (
    <StyledSection>
      <StyledContainer>
        <div>
          <StyledHeading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </StyledHeading>
        </div>
        <TestimonialWrapper>
          <Swiper
            spaceBetween={10}
            slidesPerView={isMobile ? 1 : 2}
            pagination={{ clickable: true }}
          >
            {props.content.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard>
                  {testimonial.avatar && (
                    <Avatar
                      alt={testimonial.avatar.alt}
                      image={testimonial.avatar.gatsbyImageData}
                    />
                  )}
                  <Blockquote>{testimonial.quote}</Blockquote>
                  <Text>{testimonial.source}</Text>
                  <QuoteMark>"</QuoteMark>
                </TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </TestimonialWrapper>
      </StyledContainer>
    </StyledSection>
  );
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
`;
