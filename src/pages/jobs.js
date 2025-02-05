import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import * as sections from "../components/sections";
import Fallback from "../components/fallback";
import SEOHead from "../components/head";

export default function Job(props) {
  const { jobPage } = props.data;
  console.log(jobPage);
  return (
    <Layout>
      {jobPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block;
        const Component = sections[blocktype] || Fallback;
        return <Component key={id} {...componentProps} />;
      })}
    </Layout>
  );
}

export const Head = (props) => {
  const { jobPage } = props.data;
  return <SEOHead {...jobPage} />;
};

export const query = graphql`
  {
    jobPage {
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
        ...JobPageListContent
      }
    }
  }
`;
