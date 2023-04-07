import { useReducer } from 'react';
import axios from 'axios';
import { reducer, initialState } from './reducer';

/* 
   A custom hook that uses useReducer and Axios to fetch all blog posts from a backend API
   and update the global state of the application. The hook returns the current state and a function
   to get all blog posts, or fetch the current blog post.
*/

const useGlobalReducer = (postId, title, content) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Async function that fetches all blog posts from the backend API and updates the state
  const getAllBlogPosts = async () => {
    try {
      const url = 'http://localhost:3001/v1/api/posts';
      const response = await axios.get(url);
      dispatch({ type: 'getPosts', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  /*
    Async function that fetches a single blog post from the backend API and updates the state
  */
  const getSingleBlogPost = async () => {
    try {
      const url = `http://localhost:3001/v1/api/posts/${postId}`;
      console.log(url);
      const response = await axios.get(url);
      dispatch({ type: 'getCurrentPost', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  /*
    Async function that deletes a single blog post from the backend API and updates the state
  */

  const deleteBlogPost = async () => {
    try {
      const url = `http://localhost:3001/v1/api/posts/${postId}`;
      const response = await axios.delete(url);
      dispatch({ type: 'deletePost', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  /*
      Async function that updates a single blog post from the backend API and updates the state
  */

  const patchBlogPost = async () => {
    try {
      const url = `http://localhost:3001/v1/api/posts/${postId}`;
      const response = await axios.patch(url, {
        title,
        content,
      });
      dispatch({ type: 'patchPost', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  /*
      Async function that creates a single blog post from the backend API and updates the state
  */

  const postBlog = async () => {
    try {
      const url = 'http://localhost:3001/v1/api/posts';
      const response = await axios.post(url, {
        title,
        content,
      });
      dispatch({ type: 'postBlog', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    state,
    dispatch,
    getAllBlogPosts,
    getSingleBlogPost,
    deleteBlogPost,
    patchBlogPost,
    postBlog,
  };
};

export default useGlobalReducer;
