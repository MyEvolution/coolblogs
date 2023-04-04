import { useReducer } from 'react';
import axios from 'axios';
import { reducer, initialState } from './reducer';
// create a useGlobalReducer hook to use in the app
// this hook will be used to access the global state and dispatch actions
// to update the global state

const useGlobalReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllBlogPosts = async () => {
    try {
      const url = 'http://localhost:3001/v1/api/posts';
      const response = await axios.get(url);
      dispatch({ type: 'getPosts', payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  return { state, dispatch, getAllBlogPosts };
};

export default useGlobalReducer;
