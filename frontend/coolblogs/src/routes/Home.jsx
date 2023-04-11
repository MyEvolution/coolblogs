import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Center, Spacer } from '@chakra-ui/react';
import useGlobalReducer from '../utils/useGlobalReducer';

function Home() {
  const { state, getAllBlogPosts } = useGlobalReducer();

  useEffect(() => {
    getAllBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-black h-screen">
      {/* <Button onClick={getAllBlogPosts}>Get Posts</Button> */}
      {state.allPosts.map((post) => {
        return (
          <Link to={`/blog/${post.id}`}>
            <div
              className="bg-black w-2/3 mx-auto rounded-lg border"
              key={post.id}
            >
              <p className="text-red-500 text-center text-2xl p-5 font-mono">
                {post.title}
              </p>
              <p className="text-red-500 text-center p-3 font-mono">
                {post.content}
              </p>
            </div>
            <Spacer m={7} />
          </Link>
        );
      })}
      <Center>
        <Link to="/create">
          <Button className="border" colorScheme="blackAlpha" margin={5}>
            +
          </Button>
        </Link>
      </Center>
    </div>
  );
}

export default Home;
