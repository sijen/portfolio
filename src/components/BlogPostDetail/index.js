// BlogPostDetail.js
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { usePosts } from '../../context/PostContext';
import './index.scss';

const BlogPostDetail = () => {
  const location = useLocation();
  const { state: locationState } = location;
  const { state: contextState } = usePosts();
  const [timeToRead, setTimeToRead] = useState(0);

  // Find the post from context if state is null
  const postId = locationState?.id || parseInt(location.pathname.split("/").pop());
  const post = locationState || contextState.posts.find(post => post.id === postId);

  useEffect(() => {
    if (post) {
      const wordsPerMinute = 200;
      const words = post.content.split(' ').length;
      const minutes = Math.ceil(words / wordsPerMinute);
      setTimeToRead(minutes);
    }
  }, [post]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  const { title, author, content, date, tags, image } = post;

  // Find related posts (e.g., same author or category)
  const relatedPosts = contextState.posts.filter(p => p.id !== postId && p.author === author).slice(0, 3);

  return (
    <section className="blog-post-detail">
      <h2>{title}</h2>
      <p className="time-to-read">Estimated read time: {timeToRead} minute{timeToRead > 1 ? 's' : ''}</p>
      {image && <img src={image} alt={title} className="post-image" />}
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
      <span className="date">{date}</span>

      {tags && (
        <div className="tags">
          <h3>Tags</h3>
          <ul>
            {tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="related-posts">
        <h3>Related Posts</h3>
        <ul>
          {relatedPosts.map(relatedPost => (
            <li key={relatedPost.id}>
              <Link to={`/post/${relatedPost.id}`}>{relatedPost.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={copyLink} className="copy-link">
        Copy Link
      </button>

      <div className="review-section">
        <h3>Drop Me a Line, Let Me Know What You Think</h3>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default BlogPostDetail;
