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
import useGlobalReducer from '../utils/useGlobalReducer';

function Create() {
  const [title, setTitle] = useState('Default Title!');
  const [body, setBody] = useState('');
  /*
    Steps to use:
    1. Destructure the state and the function to post a blog from the custom hook
    2. parameter = (postId, title, content) order matters, if you don't need a parameter, pass in null,
    3. Call the function to post a blog
  */

  const { postBlog } = useGlobalReducer(null, title, body);

  const handleInputChange = (e, value) => {
    const inputValue = e.target.value;
    if (value === 'title' ? setTitle(inputValue) : setBody(inputValue));
  };

  return (
    <Center className="bg-slate-500" h="100vh">
      <Flex p={{ base: 4, md: 14 }} w="100%" direction={{ base: 'column' }}>
        <Center>
          <Heading color="white">{title}</Heading>
        </Center>
        <Spacer mb={10} />
        <Box>
          <Input
            className=" font-bold text-white text-xl"
            onChange={(e) => handleInputChange(e, 'title')}
            placeholder="Type your title here!"
          />
          <Textarea
            className=" font-medium text-white text-xl"
            value={body}
            onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </Box>
        <Text>
          <Spacer mb={10} />
          <Button onClick={postBlog}> Submit! </Button>
        </Text>
      </Flex>
    </Center>
  );
}

export default Create;
