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

import Link from '../components/Link';

export default function Navbar({ ...rest }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box bg="black" {...rest} className = "navbar">
      <Container maxW="container.lg" px={4} py={3}>
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
    <Link href="https://blairhacks.com" color="white" noUnderline>
      <Flex align="center" {...rest}>
        <Image
          src="/assets/logo.png" w="36px"
          mr={1}
        />
        <Heading size="md" fontWeight="semibold">
          BlairHacks
        </Heading>
      </Flex>
    </Link>
  );
}

function Links({ ...rest }) {
  return (
    <Box {...rest} flexBasis={{ base: "100%", md: "auto" }}>
      <Stack 
        direction={["column", "row", "row", "row"]} 
        h="100%" 
        justify={["center", "space-between", "flex-end", "flex-end"]}
        align="center"
        spacing={4}
        pt={[4, 4, 0, 0]}
      >
          <Link href="/team" fontWeight="semibold">Team</Link>
          <Link href="/sponsers" fontWeight="semibold">Sponsers</Link>
          <Link href="/schedule" fontWeight="semibold">Schedule</Link>
          <MenuItem href="https://dash.blairhacks.com/register" isExternal>Register</MenuItem>

      </Stack>
    </Box>
  );
}

function MenuItem(props) {
  const { isExternal, href, children, type, ...rest } = props;
  
  const bgDesktop = useColorModeValue("brand.50", "brand.900");
  const bgHoverDesktop = useColorModeValue("brand.100", "brand.800");

  return (
    <Link isExternal={isExternal} href={href} textColor = 'white' noUnderline>
      <Button
        size="sm"
        bg={["brand.400", "brand.400", bgDesktop, bgDesktop]}
        _hover={{
          bg: ["brand.300", "brand.300", bgHoverDesktop, bgHoverDesktop]
        }}
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
