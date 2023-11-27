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
function PostCard({ slug, image, title, text, publishedAt, html ,  ...props }) {

  return (
    <BlockLink {...props} to={`/blog/${slug}`}>
      {image && (
        <>
          <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
          <Space size={3} />
        </>
      )}
      <Subhead>
        <Kicker>{text}</Kicker>
        {title}
      </Subhead>
      <Text as="p">{publishedAt}</Text>
      {text && (
        <Text variant="bold">
          <div>By {slug}</div>
        </Text>
      )}
        <div
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
    </BlockLink>
  )
}

// function PostCardSmall({ slug, image, title, category, ...props }) {
//   return (
//     <BlockLink {...props} to={`/blog/${slug}`}>
//       {image && (
//         <>
//           <GatsbyImage alt={image.alt} image={image.gatsbyImageData} />
//           <Space size={3} />
//         </>
//       )}
//       <Subhead>
//         <Kicker>{category}</Kicker>
//         {title}
//       </Subhead>
//     </BlockLink>
//   )
// }

export default function BlogIndex(props) {
  const { heading,kicker,text,image,content: posts} = props
  console.log(posts, "33xdsxds")
  // const featuredPosts = posts.filter((p) => p.category === "Featured")
  // const regularPosts = posts.filter((p) => p.category !== "Featured")

  return (
    <Container>
      <Box paddingY={4}>
          <SuperHeading as="h1">{heading}</SuperHeading>
          <Subhead>{kicker}</Subhead>
          <Text>{text}</Text>
          <FlexList variant="start" gap={0} gutter={3} responsive>
            {posts && posts.map((post) => (
              <Box as="li" key={post.id} padding={3} width="half">
                <PostCard  {...post} />
              </Box>
            ))}
          </FlexList>
        </Box>
        {/* <Box paddingY={4}>
          <Subhead>Product Updasstes</Subhead>
          <FlexList responsive wrap gap={0} gutter={3} variant="start">
            {regularPosts.map((post) => (
              <Box as="li" key={post.id} padding={3} width="third">
                <PostCardSmall {...post} />
              </Box>
            ))}
          </FlexList>
        </Box> */}
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
