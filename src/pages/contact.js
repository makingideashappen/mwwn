import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import SEOHead from "../components/head"

export default function Contact(props) {
  const { contactPage } = props.data

console.log(contactPage)


  return (
    <Layout>
      {contactPage.blocks && contactPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}
export const Head = (props) => {
  const { contactPage } = props.data
  return <SEOHead {...contactPage} />
}
export const query = graphql`
  {
    contactPage {
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
        ...ContactDetailListContent
      }
    }
  }
`
