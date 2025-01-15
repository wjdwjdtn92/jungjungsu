import { ReactNode } from 'react';

import { Layout } from '@/shared/components/layout';

function PostLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default PostLayout;
