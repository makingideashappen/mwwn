import React from "react";
import ContactForm from "./contact-form";
import {
  Container,
  Heading,
  Flex,
  FlexList,
  Icon,
  Subhead,
  Kicker,
  LinkList,
  Section,
  Box,
  Button,
  Text,
} from "./ui";
import { graphql } from "gatsby";
import Ornament from "./ornament.js";

function ContactDetail(props) {
  return (
    <Flex variant="responsive">
      <Subhead>{props.heading}</Subhead>
      <Text>{props.text}</Text>
    </Flex>
  );
}

export default function ContactDetailList(props) {
  return (
    <>
      <Section padding={4} background="muted">
        <Container>
          <Flex gap={4} variant="responsive">
            <Box padding={0} width="half">
              <Heading>{props.heading}</Heading>

              <ContactForm />
            </Box>
            <Box width="half">
              <Box>
                <Box center paddingY={4}>
                  <Heading>
                    {props.kicker && <Kicker>{props.kicker}</Kicker>}
                    {props.text && <Text>{props.text}</Text>}{" "}
                  </Heading>
                </Box>
                <FlexList gap={3} variant="column">
                  {props.content.map((contactDetail, x) => (
                    <li key={x}>
                      <ContactDetail {...contactDetail} />
                    </li>
                  ))}
                </FlexList>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Section>
      <Section>
        <Ornament />
      </Section>
    </>
  );
}

export const query = graphql`
  fragment ContactDetailListContent on ContactDetailList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
    }
  }
`;
