import React from "react";
import {
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel
} from "@chakra-ui/react";
import faq from '../data/faq';

export default function FAQ() {
  return (
    <Container maxW="container.lg" px={8} py={12}>
      <Heading as="h2" size="xl" align="center">
        FAQ
      </Heading>
      <Container maxW="container.md">
        <Accordion mt={4} allowMultiple>
          {faq.map(item =>
            <AccordionItem key={item.question}>
              <Heading>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          )}
        </Accordion>
      </Container>
    </Container>
  );
}
