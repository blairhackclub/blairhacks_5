import React from 'react';

import {
  Container,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
  FormControl,
  FormHelperText,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from "framer-motion";
import { Link as ScrollLink } from 'react-scroll';

import Button from "../components/Button";
import Em from "../components/Em";
import Link from "../components/Link";

export default function Landing({ ...rest }) {
  return (
    <Container maxW="container.md" py={{ base: 8, sm: 20 }} {...rest}>
      <Flex direction={{ base: "column", sm: "row" }}>
        <Box flex={3} px={4} color="white">
          <motion.div 
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition = {{ duration: 1 }}
            
          >
          <Heading as="h1" size="2xl" mt={2}>
            BlairHacks_5
          </Heading>
          <Text mt={2}>
            February 18-20, 2022&nbsp;
          </Text>
          <Text>
            <Em semibold>Virtual, High School Students</Em>
          </Text>

          <Stack mt={8} direction={{ base: "column", sm: "row" }} align="flex-start" spacing={4}>
            {/* UPDATE WHEN REGISTRATION STARTS */}
            <FormControl as='fieldset'>
              <Link href="https://live.blairhacks.com" noColor isExternal>
                <Button
                  fontSize="sm"
                  
                  bgGradient="linear(to-tl,purple.500,blue.500)"
                  _hover={{
                    bgGradient: "linear(to-tl,purple.500,blue.500)",
                  }}
                  _active={{
                    bgGradient: "linear(to-tl,purple.500,blue.500)",
                  }}
                >Register Today!</Button>
              </Link>
              <FormHelperText>Registration ends February 4th, 2022</FormHelperText>
            </FormControl>
            
            {/*<ScrollLink to="sponsors" spy={true} smooth={true} offset={-80} duration={500}>
              <Button
                // bgGradient="linear(to-tl,yellow.500,teal.500)"
                colorScheme="green"
                variant="outline"
              >Sponsor Us</Button>
            </ScrollLink>*/}
          </Stack>
          </motion.div>
        </Box>
        <Flex flex={2} align="center" justify="flex-end" display={{ base: "none", md: "block" }}>
          <motion.div 
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition = {{ duration: 1 }}
          >
            <Image src="/assets/steeple.jpg" w="90%" borderRadius="xl"/>
          </motion.div>
        </Flex >
      </Flex>
    </Container>
  )
}
