// BlogList.js
import React from 'react';
import BlogPost from './BlogPost';
import { usePosts } from '../../context/PostContext';import './index.scss'

const BlogList = () => {
  const { state, dispatch } = usePosts();
  const { posts } = state;

  const handleAddPost = () => {
    const newPost = { id: 3, title: 'New Post', author: 'John Smith', excerpt: 'New post content', date: '8th Jan 2024' };
    dispatch({ type: 'ADD_POST', payload: newPost });
  };

  return (
    <div className="container blog-list" id="blogSection">
      <h1>Blog</h1>
      <div className='blog-posts'>{posts.map(post => (
        <BlogPost
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author}
        excerpt={post.excerpt}
        date={post.date}
      />
      ))}</div>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default BlogList;