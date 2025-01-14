import HeaderTitle from './HeaderTitle';
import HeaderNav from './HeaderNav';

import { ModeToggle } from '../../ui/mode-toggle';

function Header() {
  return (
    <header
      className={`sticky top-0 z-10 h-16 border-b border-zinc-200 bg-white shadow-sm duration-200 dark:border-zinc-800 dark:bg-black`}
    >
      <div className="container mx-auto flex h-full w-full items-center gap-10 bg-white px-4 dark:bg-black">
        <HeaderTitle />
        <HeaderNav />
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
