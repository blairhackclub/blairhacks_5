import React from 'react';
import NextLink from 'next/link';

import {
  Link as ChakraLink
} from '@chakra-ui/react';

import Em from './Em';

export default function Link({ href, isButton, isExternal, ...rest}) {
  return (
    <>
      {isExternal ?
        <Em noBold>
          <ChakraLink href={href} 
            style={{ textDecoration: isButton ? "none" : "underline" }} 
            {...rest} isExternal
          />
        </Em>
      :
        <Em noBold>
          <NextLink href={href} passHref>
            <ChakraLink style={{ textDecoration: isButton ? "none" : "underline" }} {...rest}/>
          </NextLink>
        </Em>
      }
    </>
  )
}
