import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGlobalReducer from '../utils/useGlobalReducer';

function SingleBlog() {
  const useParam = useParams();

  const { state, getSingleBlogPost } = useGlobalReducer(useParam.id);

  useEffect(() => {
    getSingleBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        className="bg-black w-1/3 mx-auto rounded-lg mt-5"
        key={state.currentPost.id}
      >
        <p className="text-white text-center text-2xl p-5 font-mono">
          {state.currentPost.title}
        </p>
        <p className="text-white text-center p-3 font-mono">
          {state.currentPost.content}
        </p>
      </div>
    </div>
  );
}

export default SingleBlog;
