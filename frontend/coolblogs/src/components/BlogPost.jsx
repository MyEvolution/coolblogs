/* eslint-disable camelcase */
import React from 'react';
import { Spacer } from '@chakra-ui/react';

function BlogPost({ post }) {
  const { last_updated, originally_published } = post;
  const lastUpdated = new Date(last_updated);
  const originallyPublished = new Date(originally_published);

  return (
    <div key={post.id}>
      <div className="bg-black w-2/3 mx-auto rounded-lg border">
        <p className="text-red-500 text-center text-2xl p-5 font-mono">
          {post.title}
        </p>
        <p className="text-red-500 text-center p-3 font-mono">{post.content}</p>
        <div className="text-red-500 text-center text-sm p-5 font-mono">
          {originallyPublished.toLocaleString()} {' - '}
          {lastUpdated.toLocaleString()}
        </div>
      </div>
      <Spacer m={7} />
    </div>
  );
}

export default BlogPost;
