import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
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
  Flex,
  SuperHeading,
} from "../components/ui";
import SEOHead from "../components/head";
import { graphql } from "gatsby";

// function PostCard({ slug, image, title, excerpt, author, category, ...props }) {
function PostCardSmall({
  slug,
  image,
  heading,
  kicker,
  text,
  publishedAt,
  category,
  html,
  ...props
}) {
  const date = `${publishedAt.slice(8, 10)}/${publishedAt.slice(
    5,
    7
  )}/${publishedAt.slice(0, 4)}`;
  return (
    <BlockLink {...props} to={`/jobs/${slug}`}>
      <Box background="muted" radius="large" border>
        <Flex width="full">
          {image && (
            <Box center>
              <GatsbyImage
                style={{ maxHeight: 220 }}
                alt={image.alt}
                image={image.gatsbyImageData}
                size="small"
              />
            </Box>
          )}
          <Box padding={3}>
            <Subhead>
              <Kicker>{kicker}</Kicker>
              {heading}
            </Subhead>
            <Text>{date}</Text>
          </Box>
        </Flex>
      </Box>
    </BlockLink>
  );
}

export default function JobIndex(props) {
  const { heading, kicker, text, image, content: technicalInfo } = props;
  return (
    <Container>
      <Box paddingY={4}>
        <SuperHeading as="h1">{heading}</SuperHeading>
        <Subhead>{kicker}</Subhead>
        <Text>{text}</Text>
        <FlexList
          style={{ flexDirection: "column" }}
          gap={0}
          gutter={3}
          responsive
        >
          {technicalInfo &&
            technicalInfo.map((post) => (
              <Box as="li" key={post.id} padding={3} width="full">
                <PostCardSmall {...post} />
              </Box>
            ))}
        </FlexList>
      </Box>
    </Container>
  );
}
export const Head = () => {
  return <SEOHead title="Blog" />;
};

export const query = graphql`
  fragment JobPageListContent on JobPageList {
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
`;
