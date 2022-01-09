import React from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import Button from "../components/Button";

export default function GetInvolved() {
  return (
    <Container maxW="container.md" px={8} py={4}>
      <Heading as="h2" size="xl">
        Get Involved
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {/* <Box>
          <Heading as="h3" size="md" mt={5}>Volunteers</Heading>
          <Text fontSize="md" mt={2}>
            Volunteers are essential to any event, especially our hackathon.
            We're looking for student volunteers who can help us with on-the-day tasks (i.e. food, swag distribution, workshops) to help BlairHacks run as smoothly as possible!
          </Text>
          <Link href="https://forms.gle/UfpfmUMYPsQbmssV6" isExternal>
            <Button size="sm" variant="outline" colorScheme="purple" mt={4}>
              Become a Volunteer
            </Button>
          </Link>
        </Box> */}
        <Box>
          <Heading as="h3" size="md" mt={5}>Mentors</Heading>
          <Text fontSize="md" mt={2}>
            Mentors provide hands-on guidance to help attendees build out their project ideas.
            If you have experience in computer science, entrepreneurship, design, and/or finance, we'd love to have you as a mentor!
          </Text>
          <Link href="https://forms.gle/dKVgD3L66A5tY3Gk7" isExternal>
            <Button size="sm" variant="outline" colorScheme="purple" mt={4}>
              Become a Mentor
            </Button>
          </Link>
        </Box>
        <Box>
          <Heading as="h3" size="md" mt={5}>Judges</Heading>
          <Text fontSize="md" mt={2}>
            Judges help determine the winners for each track at the end of the hackathon.
            If you have industry experience as a developer, entrepreneur, or another related field, we'd love to have you as a judge!
          </Text>
          <Link href="https://forms.gle/hJYpKZpeKoxvycHx6" isExternal>
            <Button size="sm" variant="outline" colorScheme="purple" mt={4}>
              Become a Judge
            </Button>
          </Link>
        </Box>
      </SimpleGrid>
      <Text fontStyle="italic" mt={6}>
        Mentors and judges are ineligible to participate in the hackathon.
        Swag will still be provided!
      </Text>
    </Container>
  );
}
