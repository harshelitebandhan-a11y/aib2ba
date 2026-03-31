import BlogPost from './BlogPost'
import { allPosts } from './blogData'
export default function Post() {
  const post = allPosts.find(p => p.slug === 'outbound-personalization-at-scale')
  return post ? <BlogPost post={post} /> : null
}
