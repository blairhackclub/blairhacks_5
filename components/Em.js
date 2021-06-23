import React from 'react';

import {
  Text,
} from '@chakra-ui/react';

export default function Bold({ nobold, semibold, ...rest }) {
  return (
    <Text as="span" 
      fontWeight={nobold ? "normal" : semibold ? "semibold" : "bold"} 
      color="red.600" 
      {...rest}
    />
  )
}