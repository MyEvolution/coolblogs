import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Center, Input } from '@chakra-ui/react';
import useGlobalReducer from '../utils/useGlobalReducer';

function EditBlog() {
  const useParam = useParams();
  console.log(useParams());
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const { state, getSingleBlogPost, patchBlogPost } = useGlobalReducer(
    useParam.id,
    postTitle,
    postContent
  );

  useEffect(() => {
    getSingleBlogPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const titleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const contentChange = (e) => {
    setPostContent(e.target.value);
  };

  return (
    <div>
      <div
        className="bg-black w-1/3 mx-auto rounded-lg mt-5"
        key={state.currentPost.id}
      >
        <Input
          type="text"
          name="title"
          onChange={titleChange}
          value={postTitle}
          className="text-white text-center text-2xl p-5 font-mono focus:outline-0 outline-0"
        />
        <Input
          type="text"
          name="content"
          onChange={contentChange}
          value={postContent}
          className="text-white text-center text-2xl p-5 font-mono focus:outline-0 outline-0"
        />
      </div>
      <Center margin={5}>
        <Link to="/">
          <Button onClick={patchBlogPost} colorScheme="blackAlpha">
            Post
          </Button>
        </Link>
      </Center>
    </div>
  );
}

export default EditBlog;
