import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { Container,Flex, Box, Button, Text } from "./ui"
import "./contact-form.css"

export default function contactForm({ className }) {
    return (
        <Container>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    message: ""
                }}
                onSubmit={(values, actions) => {
                    // fetch("/", {
                    //   method: "POST",
                    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    //   body: encode({ "form-name": "contact-demo", ...values })
                    // })
                    //   .then(() => {
                    //     alert("Success");
                    //     actions.resetForm();
                    //   })
                    //   .catch(() => {
                    //     alert("Error");
                    //   })
                    //   .finally(() => actions.setSubmitting(false));
                }}
                validate={values => {
                    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                    const errors = {};
                    if (!values.name) {
                        errors.name = "contact.name_err"
                    }
                    if (!values.email || !emailRegex.test(values.email)) {
                        errors.email = "contact.email_err"
                    }
                    if (!values.message) {
                        errors.message = "contact.message_err"
                    }
                    return errors;
                }}
            >
                {() => (
                    <Form className={className} name="contact-demo" data-netlify={true}>
                        <Box padding="4">
                            <Flex alignItems="left" gap={3}>
                                <Text as="label" htmlFor="name">Your name</Text>
                            </Flex>
                            <Field name="name" />
                    
                            <ErrorMessage name="name" />
                        <br/>   <br/>
                            <Flex alignItems="left" gap={3}>
                                <Text as="label" htmlFor="email">Your email</Text>
                            </Flex>
                            <Field name="email" />
                            <Flex variant="left" gap={3}>
                                <ErrorMessage name="email" />
                                <br/>  <br/>
                            </Flex>
                        
                            <Flex alignItems="left" gap={3}>
                                <Text as="label" htmlFor="message">Message</Text>
                            </Flex>
                            <Field name="message" component="textarea" />

                            <Flex alignItems="left" gap={3}>
                                <Flex variant="left" gap={3}>
                                <ErrorMessage name="message" />
                                <br/> 
                                </Flex>
                            </Flex>
                            <br/>
                            <br/>
                            <Flex variant="right" gap={3}>
                                <Button type="submit">Send</Button>
                            </Flex>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};



