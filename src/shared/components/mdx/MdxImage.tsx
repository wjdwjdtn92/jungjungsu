import { ComponentProps } from 'react';

import Image from 'next/image';

import path from 'path';

import sizeof from 'image-size';

function MdxImage({
  alt,
  src,
  width,
  height,
  ...props
}: ComponentProps<'img'>) {
  const isLoclaFile = src && src.startsWith('/');
  const hasWidth = width !== undefined;
  const hasHeight = height !== undefined;

  let imageWidth = 0;
  let imageHeight = 0;

  if (isLoclaFile && (!hasWidth || !hasHeight)) {
    const filePath = path.join(process.cwd(), 'public', src);
    const { width, height } = sizeof(filePath);

    imageWidth = width ?? 0;
    imageHeight = height ?? 0;
  }

  return (
    <Image
      src={src ?? ''}
      alt={alt ?? ''}
      width={imageWidth}
      height={imageHeight}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover object-center"
      {...props}
    />
  );
}

export { MdxImage };
