import { HomeSection } from '@/components/HomeSection';
// import { Guest } from '@/components/Guest';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { LoginFormSection } from '@/components/LoginFormSection';
import { authOptions } from './api/auth/[...nextauth]/route';

export default function Home() {
  // const session = await getServerSession(authOptions);

  // if (session) redirect('/dashboard');
  return <HomeSection />;
}
