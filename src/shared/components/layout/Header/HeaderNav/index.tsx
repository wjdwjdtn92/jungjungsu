'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/shared/utils/tailwind/cn.util';

import { checkActivePath } from './index.util';
import { MENUS } from './index.constant';

function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-1 items-center justify-between py-4">
      <ul className="flex space-x-6">
        {MENUS.map(({ name, href }) => (
          <li key={`header_nav_${name}`}>
            <Link
              href={href}
              className={cn(
                'text-base font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-white',
                checkActivePath(href, pathname) &&
                  'font-bold text-blue-600 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-400'
              )}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
