import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"


export default function Blog(props) {
  const { blogPage } = props.data

  console.log(blogPage.blocks,"111")

  return (
    <Layout>
      { blogPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const Head = (props) => {
  const { blogPage } = props.data
  return <SEOHead {...blogPage} />
}



export const query = graphql`
  {
    blogPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
          id
          blocktype
          ...BlogPostListContent
        }
    }
  } 
`
