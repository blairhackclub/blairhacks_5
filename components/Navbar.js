import React, { useState } from 'react';

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
  const { isOpen, onToggle } = useDisclosure()

  const links = (
    <Stack flex={1} px={6} pt={{base: "1em", md: 0}}
      direction={{base: "column", md: "row"}}
      align="center"
      spacing={5}
      whiteSpace="nowrap"
      display="flex"
    >
      <ScrollLink to="about" spy={true} smooth={true} offset={-50} duration={500}>
        <Link as="span" href="/" fontWeight="semibold">About</Link>
      </ScrollLink>

      <ScrollLink to="getinvolved" spy={true} smooth={true} offset={-50} duration={500}>
        <Link as="span" href="/" fontWeight="semibold">Get Involved</Link>
      </ScrollLink>
      
      <ScrollLink to="faq" spy={true} smooth={true} offset={-50} duration={500}>
        <Link as="span" href="/" fontWeight="semibold">FAQ</Link>
      </ScrollLink>
      
      <ScrollLink to="sponsors" spy={true} smooth={true} offset={-50} duration={500}>
        <Link as="span" href="/" fontWeight="semibold">Sponsors</Link>
      </ScrollLink>
    </Stack>
  )

  const navbar = useBreakpointValue({ md: links, base: 
    <Collapse startingHeight={{base: 0, md: "auto"}} in={isOpen}>
      { links }
    </Collapse>
  })

  return (
    <Box
      position="sticky" top={0} zIndex={999}
      bg={"rgba(20, 20, 20, .9)"}
      overflowX="auto"
      padding="0.5em"
      {...rest}
    >
      <Container maxW="container.xl" px={0} py={2}>
        <Flex as="nav" direction="row" px={3}>
          <Logo/>

          <Spacer display={{base: 'block', md: 'none'}}/>

          { navbar }

          <Spacer />

          <Box 
            display={{base: "flex", md: "none"}}
            padding="1rem"
            right="0"
          >

            {!isOpen ? <HamburgerIcon onClick={onToggle} /> : <CloseIcon onClick={onToggle} />}
            
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

function MenuButton(props) {
  const { isExternal, href, children, type, ...rest } = props;
  
  const bgDesktop = useColorModeValue("brand.50", "brand.900");
  const bgHoverDesktop = useColorModeValue("brand.100", "brand.800");

  return (
    <Link isExternal={isExternal} href={href} textColor='white' noUnderline>
      <Button
        size="sm"
        bg={["brand.400", "brand.400", bgDesktop, bgDesktop]}
        _hover={{
          bg: ["brand.300", "brand.300", bgHoverDesktop, bgHoverDesktop]
        }}
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
}

function Toggle(props) {
  const { toggle, isOpen } = props;
  return (
    <Box 
      display={{ base: "block", md: "none" }} p={2}
      onClick={toggle}
    >
      {isOpen ? <CloseIcon/> : <HamburgerIcon w={5} h={5}/>}
    </Box>
  );
}