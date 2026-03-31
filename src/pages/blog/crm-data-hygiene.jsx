import BlogPost from './BlogPost'
import { allPosts } from './blogData'
export default function Post() {
  const post = allPosts.find(p => p.slug === 'crm-data-hygiene')
  return post ? <BlogPost post={post} /> : null
}
