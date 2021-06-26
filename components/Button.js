import React from 'react';

import { Button as ChakraButton } from '@chakra-ui/react';
import { motion } from "framer-motion";

export default function Button({ isDisabled, ...rest }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: isDisabled ? 1.05 : 0.95 }}
    >
      <ChakraButton
        isDisabled={isDisabled}
        {...rest}
      />
    </motion.div>
  )
}
