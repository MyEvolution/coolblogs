export const initialState = {
  allPosts: [],
  currentPost: {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'postBlog':
      return { ...state, allPosts: [...state.allPosts, action.payload] };
    case 'getPosts':
      return { ...state, allPosts: action.payload };
    case 'getCurrentPost':
      return { ...state, currentPost: action.payload };
    case 'deletePost':
      return {
        ...state,
        allPosts: state.allPosts.filter((post) => post.id !== action.payload),
      };
    case 'patchPost':
      return {
        ...state,
        currentPost: action.payload,
        allPosts: state.allPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    default:
      throw new Error();
  }
};
