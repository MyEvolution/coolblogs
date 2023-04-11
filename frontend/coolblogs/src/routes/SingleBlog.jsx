import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Stack, Center, Spacer } from '@chakra-ui/react';
import useGlobalReducer from '../utils/useGlobalReducer';

function SingleBlog() {
  const useParam = useParams();
  const { state, getSingleBlogPost, deleteBlogPost } = useGlobalReducer(
    useParam.id
  );

  useEffect(() => {
    getSingleBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-black h-screen">
      <div
        className="bg-black w-2/3 mx-auto rounded-lg border"
        key={state.currentPost.id}
      >
        <p className="text-red-500 text-center text-2xl p-5 font-mono">
          {state.currentPost.title}
        </p>
        <p className="text-red-500 text-center p-3 font-mono">
          {state.currentPost.content}
        </p>
      </div>
      <Spacer m="auto" />
      <Center margin={5}>
        <Stack spacing={4} direction="row">
          <Link to={`/blog/${useParam.id}/edit`}>
            <Button
              className="text-red-500 bg-opacity-50 bg-gray-900 border-2 border-red-500 hover:text-black hover:bg-red-500"
              bg="gray.900"
              colorScheme="blackAlpha"
              width={20}
            >
              Edit
            </Button>
          </Link>
          <Link to="/">
            <Button
              className="text-red-500 bg-opacity-50 bg-gray-900 border-2 border-red-500 hover:text-black hover:bg-red-500"
              bg="gray.900"
              onClick={deleteBlogPost}
              colorScheme="blackAlpha"
              width={20}
            >
              Delete
            </Button>
          </Link>
        </Stack>
      </Center>
    </div>
  );
}

export default SingleBlog;
