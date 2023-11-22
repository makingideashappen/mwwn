import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
  Box
} from "./ui"

import { useMediaQuery } from "react-responsive";

export default function HomepageCta(props) {
  const isMobile = useMediaQuery({ query: "(max-width: 840px)" });

  return (
    <Container width="fullbleed" style={{position: "relative" , minHeight: isMobile ? 200 : "auto"}}>
      <Section padding={5} radius="large" background="primary" style={{ minHeight: isMobile ? 200 : "auto" }} >
        <Box style={{position:"relative", minHeight: isMobile ? 200 : "auto" }} >
       <Container style={{position:"absolute", zIndex:5 ,width:"100%",top:"10%"}}> <Heading center>
          {props.kicker && <Kicker center>{props.kicker}</Kicker>}
          {props.heading}
        </Heading>
        <Text bold as="p" center variant="lead">
          {props.text}
        </Text>
        <ButtonList links={props.links} variant="center" reversed />
        </Container>
        {props.image && (
          <Nudge left={5} right={5} bottom={4} top={4}>
            <GatsbyImage
            style={{width:isMobile ? "200%" : "100%" , height:"100%"}}
              alt={props.image.alt}
              image={getImage(props.image.gatsbyImageData)}
            />
          </Nudge>
        )}
        </Box>
      </Section>
    </Container>
  )
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    kicker
    heading
    text
    image {
      alt
      id
      gatsbyImageData
    }
    links {
      id
      href
      text
    }
  }
`
