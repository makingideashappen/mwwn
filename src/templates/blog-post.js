import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import {
  Container,
  Box,
  Space,
  Heading,
  Text,
  Kicker
} from "../components/ui"
import * as styles from "./blog-post.css"
import SEOHead from "../components/head"
import { graphql } from "gatsby"

export default function BlogPost(props) {

const   post  = props.data.blogPost

const date = `${post.publishedAt.slice(8,10)}/${post.publishedAt.slice(5,7)}/${post.publishedAt.slice(0,4)}` 

  return (
    <Layout>
      <Container>
        <Box paddingY={5}>
          <Heading as="h1" center>
            {post.heading}
          </Heading>
          <br/>
          <Space size={4} />
          <Space size={4} />
          <Text center>{date}</Text>
          <Space size={4} />
        <Box center> {post.image && (
            <GatsbyImage
              alt={post.image.alt}
              image={post.image.gatsbyImageData}
            />
          )}
          <Box center>
          <Space size={5} />
          </Box> 
          <Kicker>{post.kicker}</Kicker>
          </Box>
          <div
            className={styles.blogPost}
            dangerouslySetInnerHTML={{
              __html: post.html,
            }}
          />
        </Box>
        <Box center>
        <Text>{post.text}</Text>
        </Box>
      </Container>
    </Layout>
  )
}
export const Head = (props) => {
  return <SEOHead {...props} description={props.excerpt} />
}

export const query = graphql`
  query SinglePost($slug: String!) {
    blogPost(slug: { eq: $slug } ) {
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
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`