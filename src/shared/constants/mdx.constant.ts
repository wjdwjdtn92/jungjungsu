import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyList,
  TypographyP,
  TypographyTable,
  TypographyLink,
  TypographyInlineCode,
  TypograpPreCode,
  TypographyTh,
  TypographyTd
} from '@/shared/components/ui/typography';

import { MdxImage } from '../components/mdx/MdxImage';

export const MDX_COMPONENTS = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  h5: TypographyH5,
  p: TypographyP,
  ul: TypographyList,
  blockquote: TypographyBlockquote,
  img: MdxImage,
  a: TypographyLink,
  pre: TypograpPreCode,
  code: TypographyInlineCode,
  table: TypographyTable,
  th: TypographyTh,
  td: TypographyTd
};
