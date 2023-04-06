import React from 'react';
import { Button } from '@chakra-ui/react';
import useGlobalReducer from '../utils/useGlobalReducer';

function Home() {
  const { state, getAllBlogPosts } = useGlobalReducer();

  return (
    <div>
      <Button onClick={getAllBlogPosts}>Get Posts</Button>
      {state.allPosts.map((post) => {
        console.log(post.title);
        return (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
