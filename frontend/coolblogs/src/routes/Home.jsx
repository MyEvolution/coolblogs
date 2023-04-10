import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '@chakra-ui/react';
import useGlobalReducer from '../utils/useGlobalReducer';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const { state, getAllBlogPosts } = useGlobalReducer();

  useEffect(() => {
    getAllBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Header />
      {/* <Button onClick={getAllBlogPosts}>Get Posts</Button> */}
      {state.allPosts.map((post) => {
        return (
          <Link to={`/blog/${post.id}`}>
            <div
              className="bg-black w-1/3 mx-auto rounded-lg mt-5"
              key={post.id}
            >
              <p className="text-white text-center text-2xl p-5 font-mono">
                {post.title}
              </p>
              <p className="text-white text-center p-3 font-mono">
                {post.content}
              </p>
            </div>
          </Link>
        );
      })}
      <Footer />
    </div>
  );
}

export default Home;
