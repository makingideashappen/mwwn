import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  FlexList,
  Box,
  Space,
  BlockLink,
  Heading,
  Subhead,
  Kicker,
  Text,
  SuperHeading,
  Flex
} from "../components/ui"
import SEOHead from "../components/head"
import { graphql } from "gatsby"


function PostCardSmall({ slug, image, heading, kicker, text, publishedAt, html, ...props }) {
  //category
  return (
    <BlockLink {...props} to={`/technical-info/${slug}`}>
      <Box background="muted" radius="large">
        <Flex width="full"   >
          {image && (
            <Box>
              <GatsbyImage style={{ maxHeight: 330 }} alt={image.alt} image={image.gatsbyImageData} size="small" />
            </Box>
          )}
          <Box padding={3}>
            <Subhead>
              <Kicker>{kicker}</Kicker>
              {heading}
            </Subhead>
          </Box>
        </Flex></Box>
    </BlockLink>
  )
}

export default function TechnicalInfoList(props) {
  const { heading, kicker, text, image, content: technicalInfo } = props
  console.log(props, "33xdsxds")
  return (
    <Container>
      <Box paddingY={4}>
        <SuperHeading as="h1">{heading}</SuperHeading>
        <Subhead>{kicker}</Subhead>
        <Text>{text}</Text>
        <FlexList variant="start" gap={0} gutter={3} responsive>
          {technicalInfo && technicalInfo.map((post) => (
            <Box as="li" key={post.id} padding={3} width="full">
              <PostCardSmall  {...post} />
            </Box>
          ))}
        </FlexList>
      </Box>

    </Container>
  )
}
export const Head = () => {
  return <SEOHead title="Technical Info" />
}

export const query = graphql`
  fragment TechnicalInfoListContent on TechnicalInfoList {
    id
    heading
    kicker
    text
    content {
      id
      slug 
      publishedAt
      category
      heading
      kicker
      image {
        id
        gatsbyImageData
        alt
      }
      html
    
    }
  }
`
