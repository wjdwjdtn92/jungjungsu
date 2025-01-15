import { getBlogPosts } from '@/features/post/utils';
import { PostList } from '@/features/post/components';

async function PostPage() {
  const posts = getBlogPosts().map((post) => ({
    slug: post.slug,
    title: post.metadata.title,
    summary: post.metadata.summary,
    publishedAt: post.metadata.publishedAt
  }));

  return <PostList posts={posts} />;
}

export default PostPage;
