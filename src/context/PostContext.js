// PostContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Create the context
const PostContext = createContext();

// Define initial state
const initialState = {
  posts: [
    { id: 1, title: 'Getting Started with Cybersecurity', author: 'John Doe', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', date: '6th Jan 2024' },
    { id: 2, title: 'Best Practices for Incident Response', author: 'Jane Smith', excerpt: 'Praesent quis metus sit amet ipsum mollis auctor.', date: '7th Jan 2024' }
  ]
};

// Define a reducer
const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    default:
      return state;
  }
};

// Create a provider component
export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook to use the PostContext
export const usePosts = () => {
  return useContext(PostContext);
};
