import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export interface Post {
  slug: string
  title: {
    rendered: string
  }
  id: string
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
}

const PostList = () => {
  const [posts, setPosts] = useState([] as Post[])

  useEffect(() => {
    axios.get('https://techcrunch.com/wp-json/wp/v2/posts').then((posts) => {
      setPosts(posts.data)
    })
  })

  return (
    <div>
      {posts.map((post) => (
        <Link to={`/${post.slug}`} key={post.id}>
          <div className="card" key={post.id}>
            <div className="card-content">
              <h3>{post.title.rendered}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostList
