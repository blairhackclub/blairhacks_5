import React from 'react';

import {
  Container,
  Flex,
  Stack,
  Box,
  Heading,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink } from 'react-scroll';

import Link from '../components/Link';

export default function Navbar({ ...rest }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box {...rest} bg = "black">
      <Container maxW="container.xl" px={8} py={2}>
        <Flex as="nav" direction="row" align="center" justify="space-between" wrap="wrap">
          <Logo/>
          <Toggle toggle={toggle} isOpen={isOpen}/>
          <Links flex={1} display={{ base: isOpen ? "block" : "none", md: "block" }}/>
        </Flex>
      </Container>
    </Box>
  )
}

function Logo({ ...rest }) {
  return (
    <Link href="/" color="white" noUnderline>
      <Flex align="center" {...rest}>
        <Image
          src="/assets/logo.png" 
          w="56px"
          mr={1}
        />
      </Flex>
    </Link>
  );
}

function Links({ ...rest }) {
  return (
    <Box {...rest} pl={6} flexBasis={{ base: "100%", md: "auto" }} >
      <Flex direction={["column", "row", "row", "row"]} pt={[8, 8, 0, 0]} pb={[4, 4, 0, 0]}>
        <Stack flex={1}
          direction="row"
          justify={["center", "flex-start", "flex-start", "flex-start"]}
          align="center"
          spacing={4}
        >
          {/* <ScrollLink to = "tracks" spy={true} smooth={true} offset={50} duration={500}>
            <Link href = "" fontWeight="semibold">Tracks</Link>
          </ScrollLink> */}
          <ScrollLink to = "team" spy={true} smooth={true} offset={50} duration={500}>
            <Link href = "" fontWeight="semibold">Team</Link>
          </ScrollLink>
          <ScrollLink to = "faq" spy={true} smooth={true} offset={50} duration={500}>
            <Link href = "" fontWeight="semibold">FAQ</Link>
          </ScrollLink>
          <ScrollLink to = "sponsors" spy={true} smooth={true} offset={50} duration={500}>
            <Link href = "" fontWeight="semibold">Sponsors</Link>
          </ScrollLink>
        </Stack>
        <Stack
          direction="row"
          justify={["center", "flex-start", "flex-end", "flex-end"]}
          align="center"
          spacing={4}
          pt={[4, 0, 0, 0]}
        >
          <MenuButton href="https://dash.blairhacks.com/login">Login</MenuButton>
          <MenuButton href="https://dash.blairhacks.com/register">Register</MenuButton>
        </Stack>
      </Flex>
    </Box>
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