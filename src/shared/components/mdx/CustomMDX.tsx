import remarkGfm from 'remark-gfm';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

import { MDX_COMPONENTS } from '@/shared/constants/mdx.constant';

function CustomMDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
      }}
      components={{ ...MDX_COMPONENTS, ...(props.components || {}) }}
      {...props}
    />
  );
}

export default CustomMDX;
