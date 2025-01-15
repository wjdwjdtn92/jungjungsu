import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';

function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h2 className="text-6xl font-bold">404</h2>
      <p className="mt-6 text-center text-xl font-semibold">
        페이지를 찾을 수 없습니다.
      </p>
      <Link href="/" passHref>
        <Button className="mt-4" size="lg">
          홈으로
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
