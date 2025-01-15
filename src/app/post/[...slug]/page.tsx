import { Suspense } from 'react';

import { notFound } from 'next/navigation';

import { CustomMDX } from '@/shared/components/mdx';

import { getBlogPost, getBlogPosts } from '@/features/post/utils';

export const dynamicParams = true; // generateStaticParams에 없는 경로도 동적 생성
export const revalidate = 600; // 10분마다 페이지 재생성 (600초)

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug.split('/')
  }));
}

async function Page({
  params
}: {
  params: Promise<{
    slug: string[];
  }>;
}) {
  const { slug } = await params;

  const post = getBlogPost(slug.map(decodeURIComponent).join('/'));

  if (!post) {
    console.log('not found');
    notFound();
  }

  return (
    <article className="w-full max-w-screen-md px-5 py-6 md:px-2.5">
      <Suspense fallback={<>Loading...</>}>
        <CustomMDX source={post.content} />
      </Suspense>
    </article>
  );
}

export default Page;
