import React from 'react'
import {
    Container,
    Heading,
    Text
} from "@chakra-ui/react";

export default function Team() {
    return (
        <Container maxW="container.md" px={8} pt={6} pb={2}>
            <Heading as="h1" size="2xl" mt={2} align="center">
                Our Team
            </Heading>
            <Text mt={12}>
                Our Team is made-up of entirely Montgomery Blair HS Students.
            </Text>
        </Container>
    )
}
