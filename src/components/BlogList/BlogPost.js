// BlogPost.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'
// import { usePosts } from '../../context/PostContext';

const BlogPost = ({ id, title, author, excerpt, date }) => {
  // const { state, dispatch } = usePosts();
  // const { posts } = state;
  console.log(title)
  return (
    <div className="blog-post">
      <h2>
            <Link
              to={{
                pathname: `/blog/${id}`,
                state: { title, author, excerpt, date}
              }}
            >
              {title}
            </Link>
          </h2>
      <p>By: {author}</p>
      <p>{excerpt}</p>
      <span>{date}</span>
    </div>
  );
};

export default BlogPost;
