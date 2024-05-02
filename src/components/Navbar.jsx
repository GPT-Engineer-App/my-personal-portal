import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <Flex bg="blue.500" color="white" padding="4" justifyContent="space-between">
      <Box p="2">
        <FaHome />
      </Box>
      <Box>
        <Link p="2">Home</Link>
      </Box>
    </Flex>
  );
}

export default Navbar;