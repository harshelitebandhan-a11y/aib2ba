import BlogPost from './BlogPost'
import { allPosts } from './blogData'
export default function Post() {
  const post = allPosts.find(p => p.slug === 'b2b-email-deliverability')
  return post ? <BlogPost post={post} /> : null
}
