import type { PostItemProps } from './index.type';

import Link from 'next/link';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/shared/components/ui/card';

function PostItem({ slug, title, summary, publishedAt }: PostItemProps) {
  return (
    <Link href={`/post/${slug}`}>
      <Card className="h-[190px] transform transition duration-300 hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl">
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="line-clamp-3 h-[72px]">{summary}</p>

          <p className="text-end text-sm text-gray-600 dark:text-gray-300">
            {publishedAt}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PostItem;
