import React, { useState } from 'react';
import {
  Button,
  Center,
  Box,
  Spacer,
  Text,
  Heading,
  Flex,
  Textarea,
  Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useGlobalReducer from '../utils/useGlobalReducer';

function Create() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { patchBlogPost } = useGlobalReducer(null, title, body);

  const handleInputChange = (e, value) => {
    const inputValue = e.target.value;
    if (value === 'title' ? setTitle(inputValue) : setBody(inputValue));
  };

  return (
    <Center className="bg-black h-screen">
      <Flex
        p={{ base: 4, md: 14 }}
        w="100%"
        direction={{ base: 'column' }}
        justifyContent="center"
      >
        <Heading className="text-red-500 font-bold drop-shadow-xl stroke-white text-center">
          Edit Post
        </Heading>
        <Spacer mb={10} />
        <Box className="">
          <Input
            className=" font-bold text-white text-xl bg-gray-800 border-red-500 border-2 outline-none"
            onChange={(e) => handleInputChange(e, 'title')}
            placeholder="Type your title here!"
          />
          <Textarea
            className=" font-medium text-white text-xl bg-gray-800 border-red-500 border-2 outline-none"
            value={body}
            onChange={handleInputChange}
            placeholder="Type your blog post here!"
            size="sm"
          />
        </Box>
        <Text>
          <Spacer mb={10} />
          <Center>
            <Link to="/">
              <Button
                onClick={patchBlogPost}
                className="text-red-500 bg-opacity-50 bg-gray-900 border-2 border-red-500 hover:text-black hover:bg-red-500"
                bg="gray.900"
              >
                {' '}
                Submit!{' '}
              </Button>
            </Link>
          </Center>
        </Text>
      </Flex>
    </Center>
  );
}

export default Create;
