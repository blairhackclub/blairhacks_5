import React from 'react';
import NextLink from 'next/link';

import {
  Link as ChakraLink
} from '@chakra-ui/react';

import Em from './Em';

export default function Link({ href, noUnderline, isExternal, ...rest }) {
  return (
    <>
      {isExternal ?
        <ChakraLink href={href}
          color="red.600"
          style={{ textDecoration: noUnderline ? "none" : "no" }}
          {...rest} isExternal
        />
      :
        <NextLink href={href} passHref>
          <ChakraLink
            color="red.600"
            style={{ textDecoration: noUnderline ? "none" : "no" }} 
            {...rest}
          />
        </NextLink>
      }
    </>
  )
}