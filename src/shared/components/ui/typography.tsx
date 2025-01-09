import { ComponentProps, isValidElement } from 'react';

import Link from 'next/link';

import { highlight } from 'sugar-high';

import { cn } from '@/shared/utils/tailwind/cn.util';

function TypographyH1({ className, ...props }: ComponentProps<'h1'>) {
  return (
    <h1
      className={cn(
        'mb-4 scroll-m-20 border-b pb-2 text-4xl font-extrabold tracking-tight lg:text-5xl',
        className
      )}
      {...props}
    />
  );
}

function TypographyH2({ className, ...props }: ComponentProps<'h2'>) {
  return (
    <h2
      className={cn(
        'mb-4 mt-6 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  );
}

function TypographyH3({ className, ...props }: ComponentProps<'h3'>) {
  return (
    <h3
      className={cn(
        'mb-4 mt-6 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function TypographyH4({ className, ...props }: ComponentProps<'h4'>) {
  return (
    <h4
      className={cn(
        'mb-4 mt-6 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function TypographyH5({ className, ...props }: ComponentProps<'h5'>) {
  return (
    <h5
      className={cn(
        'text-l mb-4 mt-6 scroll-m-20 border-b pb-2 font-medium tracking-tight',
        className
      )}
      {...props}
    />
  );
}

function TypographyP({ className, ...props }: ComponentProps<'p'>) {
  return (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  );
}

function TypographyBlockquote({
  className,
  ...props
}: ComponentProps<'blockquote'>) {
  return (
    <blockquote
      className={cn('mt-6 border-l-2 pl-6 italic', className)}
      {...props}
    />
  );
}

function TypographyList({ className, ...props }: ComponentProps<'ul'>) {
  return (
    <ul
      className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
      {...props}
    />
  );
}

function TypographyTable({ className, ...props }: ComponentProps<'table'>) {
  return (
    <div className="my-6 w-full overflow-x-auto">
      <table
        className={cn(
          'w-full border-collapse border border-gray-300',
          className
        )}
        {...props}
      />
    </div>
  );
}

function TypographyTh({ className, ...props }: ComponentProps<'th'>) {
  return (
    <th
      className={cn(
        'border border-gray-300 bg-gray-100 px-4 py-2 text-left font-bold dark:bg-gray-900',
        className
      )}
      {...props}
    />
  );
}

function TypographyTd({ className, ...props }: ComponentProps<'td'>) {
  return (
    <td
      className={cn('border border-gray-300 px-4 py-2', className)}
      {...props}
    />
  );
}
function TypograpPreCode({ children, ...props }: ComponentProps<'pre'>) {
  let codeContent = '';

  if (isValidElement(children)) {
    codeContent = children.props.children;
  }

  const codeHTML = highlight(String(codeContent));

  return (
    <pre
      className="overflow-auto rounded-lg bg-gray-50 p-4 dark:bg-gray-900"
      {...props}
    >
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
    </pre>
  );
}

function TypographyLink(props: ComponentProps<'a'>) {
  const href = props.href;
  const styles = ' font-medium text-blue-600';

  if (href?.startsWith('/')) {
    return <Link className={styles} href={href} {...props} />;
  }

  if (href?.startsWith('#')) {
    return <a className={styles} {...props} />;
  }

  return (
    <a
      className={styles}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}

function TypographyInlineCode({ className, ...props }: ComponentProps<'code'>) {
  return (
    <code
      className={cn(
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-inherit',
        className
      )}
      {...props}
    />
  );
}

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyLink,
  TypographyTable,
  TypographyInlineCode,
  TypograpPreCode,
  TypographyTh,
  TypographyTd
};
