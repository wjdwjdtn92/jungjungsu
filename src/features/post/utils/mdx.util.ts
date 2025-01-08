import path from 'path';

import { getMDXDataFromDir, getMDXDataFromFilePath } from '@/shared/utils';

function getBlogPosts() {
  return getMDXDataFromDir(path.join(process.cwd(), 'src', 'content'));
}

function getBlogPost(slug: string) {
  return getMDXDataFromFilePath(
    path.join(process.cwd(), 'src', 'content', `${slug}.mdx`)
  );
}

export { getBlogPosts, getBlogPost };
