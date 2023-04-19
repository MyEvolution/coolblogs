import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flex, Button, Text } from '@chakra-ui/react';

function Header() {
  const location = useLocation();

  return (
    <Flex
      justify="center"
      align="center"
      bg="black"
      color="white"
      py={5}
      fontSize="4xl"
      fontWeight="bold"
      fontFamily="mono"
    >
      <Text top={5} left={5} position="absolute" color="red" p>
        Cool Blogs
      </Text>
      <Flex grow={1} justify="center">
        <Link to="/">
          <Button
            fontSize="2xl"
            colorScheme={location.pathname === '/' ? 'red' : 'whiteAlpha'}
            variant="ghost"
            mr={5}
          >
            Home
          </Button>
        </Link>
        <Link to="/create">
          <Button
            fontSize="2xl"
            colorScheme={location.pathname === '/create' ? 'red' : 'whiteAlpha'}
            variant="ghost"
          >
            Create Blog
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
