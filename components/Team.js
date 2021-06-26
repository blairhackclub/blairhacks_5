import React from 'react';
import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";

const team = {
  directors: [
    {
      name: "Annie Gao",
      image: "https://blair.hackclub.com/images/team/annie.png"
    },
    {
      name: "Linkai Wu",
      image: "https://blair.hackclub.com/images/team/linkai.jpeg"
    },
    {
      name: "Tinu Vanapamula",
      image: "https://blair.hackclub.com/images/team/tinu.jpg"
    }
  ],
  organizers: [
    {
      name: "Anika Rai",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Outreach Lead"
    },
    {
      name: "Patrick Zhang",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Logistics Lead"
    },
    {
      name: "Fox Chyatte",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Finance Lead"
    },
    {
      name: "Aditya Chattopadhyay",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Logistics"
    },
    {
      name: "Julia Gelfond",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Logistics"
    },
    {
      name: "Kevin Yao",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Logistics"
    },
    {
      name: "Sudhish Swain",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Logistics"
    },
    {
      name: "Neel Jay",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Finance"
    },
    {
      name: "Steven Wang",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Finance"
    },
    {
      name: "Yash Thakur",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Outreach"
    },
    {
      name: "Shivani Nanda",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Outreach"
    },
    {
      name: "Autumn Qiu",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Outreach"
    },
    {
      name: "Ace Chun",
      image: "https://blair.hackclub.com/images/team/annie.png",
      position: "Outreach"
    },
  ]
}

export default function Team() {
  return (
    <Container maxW="container.lg" px={8} py={12}>
      <Heading as="h2" size="xl" align="center">
        Our Team
      </Heading>

      <Container maxW="container.sm" px={{ base: 0, sm: 4 }} mt={4}>
        <SimpleGrid columns={{ base: 3, md: 3 }} spacing={{ base: 0, md: 8 }}>
          {team.directors.map(i =>
            <Box align="center" p={4} key={i.name}>
              <Image w="90%" maxW="128px" borderRadius="50%" src={i.image} alt={i.name}/>
              <Text fontSize="lg" fontWeight="semibold" mt={5}>{i.name}</Text>
              <Text fontSize="md">Director</Text>
            </Box> 
          )}
        </SimpleGrid>
      </Container>

      <SimpleGrid columns={{ base: 3, md: 7 }} spacing={0} mt={4}>
        {team.organizers.map(i =>
          <Box align="center" p={4} key={i.name}>
            <Image w="90%" maxW="100px" borderRadius="50%" src={i.image} alt={i.name}/>
            <Text fontSize="lg" fontWeight="semibold" mt={5}>{i.name}</Text>
            <Text fontSize="md">{i.position}</Text>
          </Box>
        )}
      </SimpleGrid>
    </Container>
  )
}
