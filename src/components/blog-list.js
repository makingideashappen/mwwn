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
  SuperHeading
} from "../components/ui"
import SEOHead from "../components/head"
import { graphql } from "gatsby"

// function PostCard({ slug, image, title, excerpt, author, category, ...props }) {
function PostCard({ slug, image, heading, text, publishedAt, html ,  ...props }) {
const date = `${publishedAt.slice(8,10)}/${publishedAt.slice(5,7)}/${publishedAt.slice(0,4)}` 
  return (
    <Box width="full" gap={5} radius="large">
    <BlockLink {...props} to={`/blog/${slug}`}>
    <Box background="muted">
      {image && (
        <Box>
          <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
          <Space size={3} />
        </Box>
      )}
      <Box  padding={3}>
      <Subhead>
        <Kicker>{heading}</Kicker>
      </Subhead>
      <Text as="p">{date}</Text>
      {text && (
        <Text variant="bold">
          <div>{text}</div>
        </Text>
      )}
      </Box>
     </Box>
        {/* <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          /> */}
    </BlockLink>
    </Box>
  )
}

export default function BlogIndex(props) {
  const { heading,kicker,text,image,content: posts} = props
  console.log(posts, "33xdsxds")

  return (
    <Container>
      <Box paddingY={4}>
          <SuperHeading as="h1">{heading}</SuperHeading>
          <Subhead>{kicker}</Subhead>
          <Text>{text}</Text>
          <FlexList variant="start" gap={3} gutter={3} responsive>
            {posts && posts.map((post) => (
              <Box as="li" key={post.id} padding={3} width="half">
                <PostCard  {...post} />
              </Box>
            ))}
          </FlexList>
        </Box>
    </Container>
  )
}
export const Head = () => {
  return <SEOHead title="Blog" />
}

export const query = graphql`
  fragment BlogPostListContent on BlogPostList {
    id
    heading
    kicker
    text
    content {
      id
      slug 
      publishedAt
      heading
      kicker
      image {
        id
        gatsbyImageData
        alt
      }
      text
      html
    }
  }
`
