import React from 'react'
import ContactForm from "./contact-form"
import { Container, Heading, Flex, FlexList,Icon,Subhead,Kicker, LinkList, Section, Box, Button, Text } from "./ui"
import { graphql } from "gatsby"


function ContactDetail(props) {
  return (

    <Flex>
      <Subhead>{props.heading}</Subhead>
      <Text>{props.text}</Text>
    </Flex>


  )
}

export default function ContactDetailList(props) {
  return (
    <Section padding={4} background="muted">
      <Container>
        <Flex gap={4} variant="responsive">
          <Box width="half">
            <Box>
              <Box center paddingY={4}>
                <Heading>
                  {props.kicker && <Kicker>{props.kicker}</Kicker>}
                  {props.heading}
                </Heading>
                {props.text && <Text>{props.text}</Text>}
              </Box>
              <FlexList gap={3} variant="column">
                { props.content.map((contactDetail) => (
                  <li key={contactDetail.id}>
                    <ContactDetail {...contactDetail} />
                  </li>
                ))}
              </FlexList>
            </Box>
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
`
