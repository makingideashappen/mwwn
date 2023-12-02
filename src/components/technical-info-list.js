import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  Container,
  FlexList,
  Box,
  BlockLink,
  Subhead,
  Kicker,
  Text,
  SuperHeading,
  Flex
} from "../components/ui"
import SEOHead from "../components/head"
import { graphql } from "gatsby"


function PostCardSmall({ slug, image, heading, kicker, text, publishedAt, category, html, ...props }) {
  //category
  const date = `${publishedAt.slice(8,10)}/${publishedAt.slice(5,7)}/${publishedAt.slice(0,4)}` 

  return (
    <BlockLink {...props} to={`/technical-info/${slug}`}>
      <Box background="muted" radius="large">
        <Flex width="full"   >
          {image && (
            <Box center>
              <GatsbyImage style={{ maxHeight: 220 }} alt={image.alt} image={image.gatsbyImageData} size="small" />
            </Box>
          )}
          <Box padding={3}>

         <Text><Box  background="primary" width="half" padding="2" center radius="large">{category}</Box></Text>
            <Subhead>
              <Kicker>{kicker}</Kicker>
              {heading}
            </Subhead>
            <Text>{date}</Text>
          </Box>
        </Flex></Box>
    </BlockLink>
  )
}

export default function TechnicalInfoList(props) {
  const { heading, kicker, text, image, content: technicalInfo } = props
  return (
    <Container>
      <Box paddingY={4}>
        <SuperHeading as="h1">{heading}</SuperHeading>
        <Subhead>{kicker}</Subhead>
        <Text>{text}</Text>
        <FlexList style={{flexDirection:"column" }} gap={0} gutter={3} responsive >
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
