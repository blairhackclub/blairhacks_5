import React from 'react';

import {
  Container,
  Flex,
  Stack,
  Box,
  Heading,
  Fade, 
  Image,
  Button,
  Spacer,
  Collapse,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue 
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from "framer-motion";

import Link from '../components/Link';

export default function Navbar({ ...rest }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="sticky" top={0} zIndex={999}
      bg={"rgba(20, 20, 20, .9)"}
      overflowX="auto"
      {...rest}
    >
      <Container maxW="container.xl" px={0} py={2}>
        <Flex as="nav" direction="row" px={3}>
          <Logo/>

          <Spacer display={{base: 'block', sm: 'none'}}/>

          {useBreakpointValue({ sm: <Links/>, base: 
            <Collapse startingHeight={{base: 0, sm: "auto"}} in={isOpen}>
              <Links/>
            </Collapse>
          })}

          <Spacer />

          <Box 
            display={{base: "flex", sm: "none"}}
            p={3}
            right="0"
          >

            {!isOpen ? <HamburgerIcon w={5} h={5} onClick={onToggle}/> : <CloseIcon onClick={onToggle}/>}
            
          </Box>

        </Flex>

      </Container>
    </Box>
  )
}

function Logo({ ...rest }) {
  return (
    <ScrollLink to="home" spy={true} smooth={true} offset={-60} duration={500}>
      <Flex align="center" {...rest} w="48px">
        <Image
          src="/assets/logo.png" 
        />
      </Flex>
    </ScrollLink>
  );
}

function Links({ ...rest }) {
  return <Stack flex={1} px={6} py={3}
    direction={{base: "column", sm: "row"}}
    align="center"
    spacing={5}
    whiteSpace="nowrap"
    display="flex"
  >
    <ScrollLink to="about" spy={true} smooth={true} offset={-50} duration={500}>
      <Link as="span" href="/" fontWeight="semibold">About</Link>
    </ScrollLink>

    {/* <ScrollLink to="getinvolved" spy={true} smooth={true} offset={-50} duration={500}>
      <Link as="span" href="/" fontWeight="semibold">Get Involved</Link>
    </ScrollLink> */}
    
    <ScrollLink to="faq" spy={true} smooth={true} offset={-50} duration={500}>
      <Link as="span" href="/" fontWeight="semibold">FAQ</Link>
    </ScrollLink>
    
    <ScrollLink to="sponsors" spy={true} smooth={true} offset={-50} duration={500}>
      <Link as="span" href="/" fontWeight="semibold">Sponsors</Link>
    </ScrollLink>
  </Stack>;
}
