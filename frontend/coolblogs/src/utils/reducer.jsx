export const initialState = {
  allPosts: [],
  currentPost: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'getPosts':
      return { ...state, allPosts: action.payload };
    default:
      throw new Error();
  }
};
