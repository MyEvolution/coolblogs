import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function NotFound() {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="xl" my={10}>
        404
      </Heading>
      <Text fontSize="xl" fontWeight="bold" mb={5}>
        Page not found
      </Text>
      <Text>Sorry, the page you are looking for does not exist.</Text>
    </Box>
  );
}

export default NotFound;
