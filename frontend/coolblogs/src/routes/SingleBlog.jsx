import React, { useEffect } from 'react';
import useGlobalReducer from '../utils/useGlobalReducer';

function SingleBlog() {
  const { state, getSingleBlogPost } = useGlobalReducer();

  useEffect(() => {
    getSingleBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {console.log(state.currentPost.title)}
      <p>{state.currentPost.title}</p>
    </div>
  );
}

export default SingleBlog;
