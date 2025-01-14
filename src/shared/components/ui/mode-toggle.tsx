'use client';

import * as React from 'react';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';

function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleClickToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Button variant="outline" size="icon" onClick={handleClickToggle}>
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle mode</span>
    </Button>
  );
}

export { ModeToggle };
