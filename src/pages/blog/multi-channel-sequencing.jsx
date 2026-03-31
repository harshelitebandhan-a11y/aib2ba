import BlogPost from './BlogPost'
import { allPosts } from './blogData'
export default function Post() {
  const post = allPosts.find(p => p.slug === 'multi-channel-sequencing')
  return post ? <BlogPost post={post} /> : null
}
