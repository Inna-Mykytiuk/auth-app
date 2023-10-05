// Authorize User
'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

function UserInfo() {
  const { data: session } = useSession();

  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div>
        Name: <span className="font-bold">{session?.user?.name}</span>
      </div>
      <div>
        Email: <span className="font-bold">{session?.user?.email}</span>
      </div>

      <button
        className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-center"
        // onClick={handleSignOut}
        onClick={() => signOut()}
      >
        Sign Out
      </button>

      <div className="flex justify-center">
        <Link href={'/profile'}>
          <p className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Profile Page
          </p>
        </Link>
      </div>
    </main>
  );
}

export { UserInfo };
