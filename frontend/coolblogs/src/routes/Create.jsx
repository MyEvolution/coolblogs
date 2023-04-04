import React, { useState } from 'react';
import axios from 'axios';
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

function Create() {
  const [title, setTitle] = useState('Default Title!');
  const [body, setBody] = useState('');

  const handleInputChange = (e, value) => {
    const inputValue = e.target.value;
    if (value === 'title' ? setTitle(inputValue) : setBody(inputValue));
  };

  const postBlog = async (e) => {
    e.preventDefault();

    try {
      const url = 'http://localhost:3001/v1/api/posts';
      const response = await axios.post(url, {
        title,
        content: body,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
