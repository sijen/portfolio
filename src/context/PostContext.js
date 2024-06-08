// PostContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Create the context
const PostContext = createContext();

// Define initial state
const initialState = {
  posts: [
    { id: 1, title: 'Getting Started with Cybersecurity', 
      author: 'John Doe', tags:['new','beginner',"cybersecurity"], 
      content: 'Welcome to your blog post. Use this space to connect with your readers and potential customers in a way that’s current and interesting. Think of it as an ongoing conversation where you can share updates about business, trends, news, and more. Design with Ease “Do you have a design in mind for your blog? Whether you prefer a trendy postcard look or you’re going for a more editorial style blog - there’s a stunning layout for everyone.” Every layout comes with the latest social features built in. Readers will be able to easily share posts on social networks like Facebook and Twitter, view how many people have liked a post, made comments and more. With Wix, building your online community has never been easier. Create Relevant Content You’ll be posting loads of engaging content, so be sure to keep your blog organized with Categories that also allow readers to explore more of what interests them. Each category of your blog has its own page that’s fully customizable. Add a catchy title, a brief description and a beautiful image to the category page header to truly make it your own. You can also add tags (#vacation #dream #summer) throughout your posts to reach more people, and help readers search for relevant content. Using hashtags can expand your post reach and help people find the content that matters to them. Go ahead, #hashtag away. Stun Your Readers “Be original, show off your style, and tell your story.” Blogging gives your site a voice, so let your business’ personality shine through. Are you a creative agency? Go wild with original blog posts about recent projects, cool inspirational ideas, or what your company culture is like. Add images, and videos to really spice it up, and pepper it with slang to keep readers interested. Are you a programmer? Stay on the more technical side by offering weekly tips, tricks, and hacks that show off your knowledge of the industry. No matter what type of business you have, one thing is for sure - blogging gives your business the opportunity to be heard in a way in a different and unconventional way. Get Inspired To keep up with all things Wix, including website building tips and interesting articles, head over to the Wix Blog. You may even find yourself inspired to start crafting your own blog, adding unique content, and stunning images and videos. Start creating your own blog now. Good luck!', date: '6th Jan 2024' },
    { id: 2, title: 'Best Practices for Incident Response', author: 'Jane Smith', content: 'Praesent quis metus sit amet ipsum mollis auctor.', date: '7th Jan 2024' }
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
