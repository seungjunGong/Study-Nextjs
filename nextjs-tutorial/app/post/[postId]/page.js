'use client'
// app/post/[postId].js
import { useParams } from 'next/navigation'

function PostDetail() {
  const params   = useParams()

  return <h1>글 상세 정보: {params.postId}</h1>
}

export default PostDetail