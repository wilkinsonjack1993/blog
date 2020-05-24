import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Post } from './PostList'

interface MatchParams {
  slug: string
}

const PostView = () => {
  const [post, setPost] = useState({} as Post)
  const params = useParams<MatchParams>()

  useEffect(() => {
    const slug = params.slug

    axios
      .get(`https://techcrunch.com/wp-json/wp/v2/posts?slug=${slug}`)
      .then((res: any) => {
        console.log(res)
        setPost(res.data[0])
      })
  })

  if (!post || !post.title) {
    return null
  }

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
}

export default PostView
