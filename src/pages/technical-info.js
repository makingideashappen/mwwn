import React from 'react'
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"


export default function TechnicalInfo(props) {
  const { technicalInfoPage } = props.data

  console.log(technicalInfoPage.blocks,"111")

  return (
    <Layout>
      { technicalInfoPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const Head = (props) => {
  const { technicalInfoPage } = props.data
  return <SEOHead {...technicalInfoPage} />
}



export const query = graphql`
  {
    technicalInfoPage {
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
          ...TechnicalInfoListContent
          ...AboutLogoListContent
        }
    }
  } 
`
