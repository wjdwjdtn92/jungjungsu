import type { PostListProps } from './index.type';

import PostItem from '@/features/post/components/PostItem';

function PostList({ posts }: PostListProps) {
  return (
    <ul className="grid max-w-screen-md grid-cols-1 gap-4 sm:grid-cols-2">
      {posts.map(({ slug, title, summary, publishedAt }) => (
        <li key={slug}>
          <PostItem
            slug={slug}
            title={title}
            summary={summary}
            publishedAt={publishedAt}
          />
        </li>
      ))}
    </ul>
  );
}

export default PostList;
