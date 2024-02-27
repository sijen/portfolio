// BlogPage.js
import React from 'react'
import BlogPost from './BlogPost'
import './index.scss'

const BlogPage = () => {
  // Sample blog data (replace with actual data)
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with Cybersecurity',
      author: 'John Doe',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque arcu vitae sapien lacinia, et faucibus magna semper.',
    },
    {
      id: 2,
      title: 'Best Practices for Incident Response',
      author: 'Jane Smith',
      excerpt:
        'Praesent quis metus sit amet ipsum mollis auctor. Curabitur sit amet eros at lorem vestibulum consectetur.',
    },
    // Add more blog posts as needed
  ]

  return (
    <div className="container blog-page">
      <h1>Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            author={post.author}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </div>
  )
}

export default BlogPage
