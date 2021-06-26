import React from 'react';

import {
  Container,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { motion } from "framer-motion";

import Button from "../components/Button";
import Em from "../components/Em";
import Link from "../components/Link";

export default function Landing({ ...rest }) {
  return (
    <Container maxW="container.lg" py={{ base: 8, sm: 20 }} {...rest}>
      <Flex direction={{ base: "column", sm: "row" }}>
        <Box flex={3} px={4} pr={8}>
          <Heading as="h1" size="2xl" mt={2}>
            BlairHacks_5
          </Heading>
          <Text mt={2}>
            FEB 18-19, 2022&nbsp;
            <Link href="https://www.google.com/maps/dir//39.018294,-77.011105" isExternal>
              <Em semibold>@ Blair</Em>
            </Link>
          </Text>

          <Text mt={4}>
            A free, 24-hour hackathon hosted annually at MBHS for DMV high school students, featuring skill workshops, fun mini-events, and experienced mentors.
          </Text>

          <Stack mt={8} direction={{ base: "column", sm: "row" }} align="center" spacing={4}>
            {/* UPDATE WHEN REGISTRATION STARTS */}
            <Button
              fontSize="sm"
              isDisabled
              /*bgGradient="linear(to-tl,purple.500,blue.500)"
              _hover={{
                bgGradient: "linear(to-tl,purple.500,blue.500)",
              }}
              _active={{
                bgGradient: "linear(to-tl,purple.500,blue.500)",
              }}*/
            >Registration starts Jan 2022</Button>
            <Button
              bgGradient="linear(to-tl,yellow.500,teal.500)"
              _hover={{
                bgGradient: "linear(to-tl,yellow.500,teal.500)",
              }}
              _active={{
                bgGradient: "linear(to-tl,yellow.500,teal.500)",
              }}
            >Sponsor Us</Button>
          </Stack>
        </Box>
        <Flex flex={2} align="center" justify="flex-end" display={{ base: "none", md: "block" }}>
          <motion.div 
            initial={{ x: 200 }}
            animate={{ x: 0, scale: [.9, 1.1, 1] }}
            transition = {{ duration: 1 }}
          >
            <Image src="https://pbs.twimg.com/media/DtS8rjmXcAI9x9C?format=jpg&name=small" w="90%" borderRadius="xl"/>
          </motion.div>
        </Flex >
      </Flex>
    </Container>
  )
}
