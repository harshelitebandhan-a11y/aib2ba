import BlogPost from './BlogPost'
import { allPosts } from './blogData'
export default function Post() {
  const post = allPosts.find(p => p.slug === 'ai-lead-scoring-guide-2025')
  return post ? <BlogPost post={post} /> : null
}
