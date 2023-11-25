import React from 'react'
import ContactForm from "./contact-form"
import { Container, Heading, Flex, FlexList,Icon,Subhead,Kicker, LinkList, Section, Box, Button, Text } from "./ui"
import { graphql } from "gatsby"


function ContactDetail(props) {
  return (
    <Box center>
      {/* {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )} */}
      <Subhead>{props.heading}</Subhead>
      <Text>{props.text}</Text>
    </Box>
  )
}

export default function ContactList(props) {
  return (
    <Section padding={4} background="muted">
      <Container>

        <Flex gap={4} variant="responsive">
          <Box width="half">
            <FlexList>
              <Box center paddingY={4}>
                <Heading>
                  {props.kicker && <Kicker>{props.kicker}</Kicker>}
                  {props.heading}
                </Heading>
                {props.text && <Text>{props.text}</Text>}
              </Box>
              <FlexList gap={3} variant="center">
                {props.content.map((contactDetail) => (
                  <li key={contactDetail.id}>
                    <ContactDetail {...contactDetail} />
                  </li>
                ))}
              </FlexList>
            </FlexList>
          </Box>
          <Box width="half">
            <ContactForm />
          </Box>
        </Flex>
      </Container>
    </Section>

  )
}

export const query = graphql`
  fragment ContactListContent on ContactList {
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
`
