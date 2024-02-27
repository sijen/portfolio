// BlogPost.js
import React from 'react';

const BlogPost = ({ title, author, excerpt }) => {
  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>By: {author}</p>
      <p>{excerpt}</p>
    </div>
  );
};

export default BlogPost;
