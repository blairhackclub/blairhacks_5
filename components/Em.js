import React from 'react';

import {
  Text,
} from '@chakra-ui/react';

export default function Bold({ noBold, semibold, ...rest }) {
  return (
    <Text as="span" 
      fontWeight={noBold ? "normal" : semibold ? "semibold" : "bold"} 
      color="red.600" 
      {...rest}
    />
  )
}
