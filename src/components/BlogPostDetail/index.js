// BlogPostDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { usePosts } from '../../context/PostContext';
import './index.scss'

const BlogPostDetail = () => {
  const location = useLocation();
  const { state: locationState } = location;
  const { state: contextState } = usePosts();

  // Find the post from context if state is null
  const postId = locationState?.id || parseInt(location.pathname.split("/").pop());
  const post = locationState || contextState.posts.find(post => post.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { title, author, excerpt, date } = post;

  return (
    <div className="blog-post-detail">
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>{excerpt}</p>
      <span>{date}</span>
    </div>
  );
};

export default BlogPostDetail;
