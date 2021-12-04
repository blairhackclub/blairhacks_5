import React from 'react';

import {
  Container,
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Image,
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
        <Box flex={3} px={4}>
          <motion.div 
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition = {{ duration: 1 }}
          >
          <Heading as="h1" size="2xl" mt={2}>
            BlairHacks_5
          </Heading>
          <Text mt={2}>
            February 18-19, 2022&nbsp;
            <Link href="https://www.google.com/maps/place/Montgomery+Blair+High+School/@39.018671,-77.0142549,17z/data=!3m1!4b1!4m5!3m4!1s0x89b7cf586f9b73d5:0xc227c473fffb50c7!8m2!3d39.018671!4d-77.0120662" isExternal>
              <Em semibold>@ Blair</Em>
            </Link>
          </Text>

          <Stack mt={8} direction={{ base: "column", sm: "row" }} align="flex-start" spacing={4}>
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
            
            <ScrollLink to="sponsors" spy={true} smooth={true} offset={-80} duration={500}>
              <Button
                bgGradient="linear(to-tl,yellow.500,teal.500)"
                _hover={{
                  bgGradient: "linear(to-tl,yellow.500,teal.500)",
                }}
                _active={{
                  bgGradient: "linear(to-tl,yellow.500,teal.500)",
                }}
              >Sponsor Us</Button>
            </ScrollLink>
          </Stack>
          </motion.div>
        </Box>
        <Flex flex={2} align="center" justify="flex-end" display={{ base: "none", md: "block" }}>
          <motion.div 
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition = {{ duration: 1 }}
          >
            <Image src="/assets/steeple.jpg" w="90%" borderRadius="xl"/>
          </motion.div>
        </Flex >
      </Flex>
    </Container>
  )
}
