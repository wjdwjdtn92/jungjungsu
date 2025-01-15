import { redirect } from 'next/navigation';

function HomePage() {
  redirect('/post');
}

export default HomePage;
