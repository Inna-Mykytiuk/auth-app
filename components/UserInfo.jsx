// Authorize User
'use client';

import Link from 'next/link';
import styles from '../styles/Form.module.css';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

function UserInfo() {
  const { data: session } = useSession();

  return (
    <main className="container mx-auto  text-center py-20 h-full justify-between flex flex-col">
      <div className="flex">
        <h3 className="text-4xl font-bold">Authorize User Homepage</h3>
      </div>

      <div className="flex flex-col items-center">
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            width={60}
            height={60}
            alt="profile image"
            className="rounded-full"
            priority
          />
        )}
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <button
          className={styles.button}
          type="button"
          onClick={() => signOut()}
        >
          Log out
        </button>

        <div className="flex justify-center">
          <Link href={'/profile'} className="w-full">
            <p className={styles.button}>Profile Page</p>
          </Link>
        </div>
      </div>
    </main>
  );
}

export { UserInfo };
