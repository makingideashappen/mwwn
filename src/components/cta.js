import * as React from "react";
import { graphql, lINK } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Nudge,
  Container,
  Section,
  Heading,
  Text,
  ButtonList,
  Kicker,
  BlockLink,
} from "./ui";

export default function HomepageCta(props) {
  return (
    <Container width="fullbleed">
      <BlockLink to={props.link}>
        <Section
          padding={5}
          radius="large"
          background="primary"
          border="primary"
        >
          <Text as="p" center variant="superHeading">
            {props.text}
          </Text>
          {props.image && (
            <Nudge left={5} right={5} bottom={5}>
              <GatsbyImage
                alt={props.image.alt}
                image={getImage(props.image.gatsbyImageData)}
              />
            </Nudge>
          )}
        </Section>
      </BlockLink>
    </Container>
  );
}

export const query = graphql`
  fragment HomepageCtaContent on HomepageCta {
    id
    heading
    image {
      alt
      id
      gatsbyImageData
    }
    link
  }
`;
