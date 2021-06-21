import React from 'react';

import Icon from '@hackclub/icons'

import {
  Container,
  Flex,
  Stack,
  Text,
  IconButton,
  Image,
} from '@chakra-ui/react';;

import Link from './Link';

export default function Footer({ ...rest }) {
  return (
    <Container 
      maxW="container.md" p={8} pb={24} align="center" {...rest}
    >
      <Stack direction="row" justify="center" spacing={2}>
        <Link href="https://instagram.com/blair_hacks" isExternal>
          <IconButton icon={<Icon glyph="instagram" size={24}/>} isRound/>
        </Link>
        <Link href="https://twitter.com/blair_hacks" isExternal>
          <IconButton icon={<Icon glyph="twitter" size={24}/>} isRound/>
        </Link>
        <Flex align="center" justify="center" px={2}>
          <Link href="https://blair.hackclub.com" isExternal>
            <Image src="https://blair.hackclub.com/branding/flag-standalone.svg" height="32px"/>
          </Link>
        </Flex>
      </Stack>
    </Container>
  )
}
